NPM ?= $(shell which npm)
YARN ?= $(shell which yarn)
PKG_MANAGER ?= $(if $(YARN),$(YARN),$(NPM))

setup:
	@$(PKG_MANAGER) install

run:
	@$(PKG_MANAGER) run start

unit:
	@rm -rf coverage
	@$(PKG_MANAGER) run -s test

lint:
	@$(PKG_MANAGER) run --silent lint

test: lint unit

watch_unit:
	@$(PKG_MANAGER) run --silent test:watch

build:
	@$(PKG_MANAGER) run --silent build

build_dist:
	@$(PKG_MANAGER) run --silent build:dist