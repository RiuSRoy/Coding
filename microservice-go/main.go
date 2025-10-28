package main

import (
	"context"
	"fmt"
	"log"
)

func main() {

	service := NewCatFactService("https://catfact.ninja/fact")
	service = NewLoggingService(service)

	fact, err := service.getCatFact(context.TODO())

	if err != nil {
		log.Fatal(err)
	}

	fmt.Printf("%v\n", fact)
}
