# Poseidon

Poseidon is simple js library for simpler DOM work.\
Basic concept is to find elements like in jquery.

# Usage

Poseidon basically rewrites DOM to simple function:

`document.getElementById("test_id")` => `dom("#test_id")` 

`document.getElementsByClassName("test_class")` => `dom(".test_class")`

`document.getElementsByTagName("p")` => `dom("p")`

`document.documentElement` => `dom("!")`

`document.baseURI` => `dom("/")`

Poseidon also provides basic element maker:

`el("mytag", "<h1>Hi</h1>")`
