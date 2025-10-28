package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	// CheckOrigin:     func(r *http.Request) bool { return true },
}

func homePage(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Home Page")
}

func reader(conn *websocket.Conn) {
	// infinitely keep reading msgs from client
	for {
		// read message received from client
		messageType, p, err := conn.ReadMessage()
		if err != nil {
			log.Println(err)
			return
		}

		log.Println("Message received from client: ", string(p))

		// echo back the message received from client back to the client
		if err := conn.WriteMessage(messageType, p); err != nil {
			log.Println(err)
			return
		}
	}
}

func wsEndpoint(w http.ResponseWriter, r *http.Request) {

	upgrader.CheckOrigin = func(r *http.Request) bool { return true }

	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err)
	}

	log.Println("Client Successfully connected...")

	reader(ws)
}

func setupRoutes() {
	http.HandleFunc("/", homePage)
	http.HandleFunc("/ws", wsEndpoint)
}

type Player struct {
	health int
}

func decreaseHealth(player *Player) {
	player.health -= 10

	fmt.Println(*player)
}

func main() {
	// fmt.Println("Go WebScokets")
	// setupRoutes()

	// log.Fatal(http.ListenAndServe(":8080", nil))

	player := &Player{
		health: 100,
	}

	fmt.Println(player.health)
	decreaseHealth(player)
	fmt.Println(player.health)

}
