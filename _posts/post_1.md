---
title: Implementing string pattern
published: true
featured: true
author: eac
date: 'Oct 25, 2024'
snippet: "Lorem markdownum nostris sit ait Dymantis Ceyx vulgus cauda _Atlantiades_ mente
dolore ille. _Cepi capillos_, salve breve praeponere medias ille rogatque picta,
vivacis in sparsi _intexere ferre tum_! Magis teque: qua est bracchia
radiis? Lea et Ide inter corpore sinusque, modus parte cupidusque Aonides
vocem mira. Hunc oris?"
categories:
  - food
  - saucy
  - random
  - blizzard
  - silver
  - attention
skills:
  - svelte
  - typescript
  - javascript
  - nim
  - rust
  - golang
  - github-actions
  - bash
  - apple
---

# Header

## Headers

### Headerss

```svelte
<script>
	import Link from '#/Link.svelte';
</script>

<nav>
	<link href="/" title="Home" />
	<link href="/blog" title="Blog" />
	<link href="/projects" title="Projects" />
	<link href="/about-me" title="About Me" />
</nav>
```

```typescript
const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

console.log(materials.map((material) => material.length));
// Expected output: Array [8, 6, 7, 9]

(function (a) {
	return a + 100;
});

const a = async (x) => {
	return x++;
};
```

```nim
import macros, strutils

macro toLookupTable(data: static[string]): untyped =
  result = newTree(nnkBracket)
  for w in data.split(';'):
    result.add newLit(w)

const
  data = "mov;btc;cli;xor"
  opcodes = toLookupTable(data)

for o in opcodes:
  echo o
```

```java
BufferedWriter out = null;
try {
    out = new BufferedWriter(new FileWriter(”filename”, true));
    out.write(”aString”);
} catch (IOException e) {
    // error processing code
} finally {
    if (out != null) {
        out.close();
    }
}
```

```scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
	font: 100% $font-stack;
	color: $primary-color;
}
```

```rust
fn main() {
    let user = ("Adrian", 38);
    println!("User {} is {} years old", user.0, user.1);

    // tuples within tuples
    let employee = (("Adrian", 38), "die Mobiliar");
    println!("User {} is {} years old and works for {}", employee.0.1, employee.0.1, employee.1);
}
```

```go
func Example() {
	ts := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("hello world"))
	}))
	defer ts.Close()

	resp, err := http.Get(ts.URL)
	if err != nil {
		fmt.Println(err)
	}
	defer resp.Body.Close()

	fmt.Printf("%s\n", resp.Status)
	fmt.Printf("%d\n", resp.StatusCode)
}
```
