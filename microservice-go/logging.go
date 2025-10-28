package main

import (
	"context"
	"fmt"
	"time"
)

type LoggingService struct {
	next Service
}

// getCatFact implements Service.
func (s *LoggingService) getCatFact(ctx context.Context) (fact *CatFact, err error) {

	defer func(start time.Time) {
		fmt.Printf("Fetching Fact %v took %v seconds", fact.Fact, time.Since(start))
	}(time.Now())

	return s.next.getCatFact(ctx)
}

func NewLoggingService(next Service) Service {
	return &LoggingService{
		next: next,
	}
}
