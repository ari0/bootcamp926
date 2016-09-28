JS = $(shell find src/ -name "*.js")
BUILD = $(patsubst src/%.js, build/%.js, $(JS))
CSS = $(shell find style/ -name "*.css")

.PHONY: all
all: bundle.js bundle.css

.PHONY: clean
clean:
	rm -rf bundle.js bundle.css build

bundle.js: $(BUILD)
	./node_modules/.bin/browserify build/main.js -o $@

bundle.css: $(CSS)
	cat $^ > $@

build/%.js: src/%.js
	@mkdir -p "$(@D)"
	./node_modules/.bin/babel -o $@ $<
