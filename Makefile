# Colors
RED = \033[1;31m
GREEN = \033[1;32m
YELLOW = \033[1;33m
BLUE = \033[1;34m
RESET = \033[0m

all: credit build

build:
	@echo "$(GREEN)█████████████████████████ Running backend ████████████████████████████$(RESET)"
	@cd api; npm install
	@echo "$(BLUE)█████████████████████████ Running frontend ████████████████████████████$(RESET)"
	@cd src; npm install; npm run build

credit:
	@echo "$(YELLOW)████████████████████████ Chattr App ███████████████████████████$(RESET)"