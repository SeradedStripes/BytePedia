# Rust

[logo](logo.svg)
###### By Rust Foundation, CC BY 4.0, https://commons.wikimedia.org/w/index.php?curid=40715219

**Type:** General-purpose, compiled  
**First appeared:** 2012
**Creator:** Graydon Hoare

## About

Rust is a systems programming language focused on safety, speed, and concurrency.  
It is designed to be a "safe, concurrent, and practical language" that supports functional and imperative-procedural paradigms.  
Rust is similar to C++ but provides memory safety without using garbage collection.  
It is used for system-level programming, web assembly, game development, and more.  

## Key Features

> - Compiled language with zero-cost abstractions
> - Ownership system for memory safety without garbage collection
> - Strong type system with pattern matching
> - Concurrency
> - Used by companies like Mozilla, Dropbox, and Cloudflare
> - Great for experienced programmers looking for performance and safety

## History - Timeline

> - **2006**: Graydon Hoare begins working on Rust as a personal project
> - **2009**: Hoare began speaking about the language at conferences and Mozilla begins sponsoring the project
> - **2010**: Ownership system is introduced to ensure memory safety
> - **2011**: Rust Logo designed
> - **2012**: Rust 0.1 released to the public for Windows, Linux, and MacOS
> - **2013**: Hoare stepped down from Rust
> - **2015**: Rust 1.0 released as first stable version
> - **2021**: Formation of the Rust Foundation to support the language's development and growth

## History

Rust was created by Graydon Hoare in 2006 as a personal project.
Mozilla began sponsoring the project in 2009 and it gained popularity for its focus on safety.
The ownership system was introduced in 2010 to ensure memory safety without garbage collection.
The first stable version, Rust 1.0, was released in 2015.
In 2021, the Rust Foundation was formed to support the language's development and growth.
Even the White House urges developers to use Rust for secure software development.

## Fun Fact:

The name Rust was inspired by rust fungi

## Syntax

Rust's syntax is similar to C and C++ but with some unique features.
It uses curly braces for code blocks and semicolons to end statements.
Rust has a strong type system and supports pattern matching, which allows for more expressive code.
Rust's syntax is similar to C and C++, but it includes additional safety and modern language features.

## Ownership System

Rust's ownership system is the core feature that allows it to provide memory safety without garbage collection.
It is based on the concept of ownership, where each value in Rust has a single owner that is responsible for cleaning up the value when it goes out of scope.
This allows Rust to ensure that memory is safely managed without the overhead of garbage collectors, while still preventing common bugs like null pointers.

It follows three main rules:
1. Each value has a single owner
2. When the owner goes out of scope, the value is dropped
3. Values can be borrowed, but not mutated while borrowed

#### Example:

```rust
fn main() {
  let s = String::from("hello");
}
```

When `s` goes out of scope at the end of `main`, Rust frees the memory used by the string.

### Borrowing

Rust also allows borrowing which allows functions to use a value without taking its ownership.
```rust
fn main() {
  let s = String::from("hello");
  print_string(&s);
}

fn print_string(s: &String) {
  println!("{}", s);
}
```

Here `&s` creates a reference, meaning the function can read the value without having ownership of it.
This prevents common bugs such as:
- null pointer dereferencing
- use after free errors
- data races

## Statements

Statements in Rust include:

> - `fn` is used to define functions
> - `let` is used for variable binding
> - `mut` is used to make variables mutable
> - `match` is used for pattern matching
> - `impl` is used to define methods for structs and enums
> - `use` is used to bring modules into scope
> - `println!` is a macro used for printing to the console
> - `if`, `else`, `for`, and `while` are used for control flow
> - `struct` and `enum` are used for defining custom data types
> - `trait` is used for defining shared behavior across types
> - `async` and `await` are used for asynchronous programming
> - `unsafe` is used to denote code that may violate Rust's safety guarantees
> - `extern` is used for interfacing with external code and libraries
> - `mod` is used to define modules and organize code
> - `pub` is used to make items public and accessible from other modules
> - `const` and `static` are used for defining constants and static variables

## Hello World Example

```rust
fn main() {
  println!("Hello, World!");
};
```