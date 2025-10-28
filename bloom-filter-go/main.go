package main

func main() {
	keys := [3]string{"a", "b", "c"}
	for _, key := range keys {
		bloom.add(key)
	}
}
