

class TokenBucketAlgorithm:
	def __init__(self, capacity: int, tokens_to_refill: int, refill_interval: int):
		self.capacity = capacity
		self.tokens_to_refill = tokens_to_refill
		self.refill_interval = refill_interval  # in seconds
		self.current_tokens = tokens_to_refill
		self.last_request_rec_sec = 0





	def solve(self, timer: int):

		seconds_passed = timer - self.last_request_rec_sec
		tokens_to_add = int((seconds_passed * self.tokens_to_refill) / self.refill_interval)
		updated_tokens = min(self.capacity, tokens_to_add + self.current_tokens)


		if updated_tokens == 0:
			return "429"

		self.last_request_rec_sec = timer
		self.current_tokens = updated_tokens-1

		return "200"




	def get_status(self):
		return f"Current Tokens: {self.current_tokens}"



def main():
	token_bucket_algo = TokenBucketAlgorithm(capacity=5, tokens_to_refill=3, refill_interval=1)


	while True:
	    try:
	        user_input = input("Enter timestamp an new request arrives: ").strip()
	        
	        if user_input.lower() in ['quit', 'exit', 'q']:
	            print("Goodbye!")
	            break
	        
	        # Convert input to integer
	        timestamp = int(user_input)
	        
	        # Process the request
	        result = token_bucket_algo.solve(timestamp)
	        
	        # Display result
	        print(f"Timestamp: {timestamp} -> Status: {result}")
	        print(f"  {token_bucket_algo.get_status()}")
	        print()
	        
	    except ValueError:
	    	print("Please enter a valid integer or 'quit' to exit.")
	    except KeyboardInterrupt:
	        print("\nGoodbye!")
	        break


if __name__ == "__main__":
	main()




