# Assembly

[logo](logo.svg)

Type: Low level programming language
First appeared: 1947
Creator: Early computer scientists (notably Kathleen Booth)

## About

Assembly is a low level programming language that is very close to machine code.
It is for high performant applications and it normally used for operating systems and embedded systems.
Its a very difficult language to learn and use, but it can be very powerful to use.
Each CPU architecture has its own assembly language, such as x86, ARM, or RISC-V.

## Key Features

> - Very close to machine code
> - Hardware-specific (depends on CPU architecture)
> - Extremely high performance
> - Direct control over memory and registers
> - Commonly used in operating systems, drivers, and embedded systems
> - Difficult to learn compared to high-level languages

## History - Timeline

> - **1947**: Kathleen Booth develops one of the first assembly languages for the ARC computer
> - **Late 1940s**: Early computers begin using mnemonic instructions instead of raw machine code
> - **1950s**: Assemblers are developed to automatically translate assembly into machine code
> - **1970s–present**: Assembly continues to be used for operating systems, drivers, and embedded systems

## History

Assembly was developed in the late 1940s as a way to write programs using instructions instead of just raw machine code.
Kathleen Booth is credited with creating one of the first assembly languages for the ARC computer in 1947.
As computers evolved, different CPU architectures developed their own assembly languages, 
such as x86, ARM, and RISC-V.
Assembly is and always will be a core part of computing, especially for low-level programming and performance-critical applications.
It is still widely used in operating systems, device drivers, embedded systems, and performance-critical code.

## Fun Fact:

A lot of programmers say they know assembly just because they wrote a tiny program in it once.
In reality assembly is the hardest language to learn and master, and it takes years of experience to really understand it.

## Syntax

Assembly syntax is different depending on the CPU architecture, but it generally consists of mnemonic instructions that correspond to machine code operations.
For example, in x86 assembly, you might see instructions like `mov` and `add` that correspond to moving data and adding values in registers.
Assembly also uses labels for jumps and loops, and it allows direct manipulation of memory and registers.
The syntax is very low-level and can be difficult to read and write, but it gives programmers direct control over the hardware that they have which no other language can provide.

### Registers

> - `rax`: Accumulator: math, return values from functions and syscalls
> - `rbx`: Base: often preserved across calls, general use
> - `rcx`: Counter: loops, shifts, function arguments
> - `rdx`: Data: math/div, function arguments
> - `rsi`: Source Index: for memory operations, string copy
> - `rdi`: Destination Index: for memory operations, string copy
> - `rsp`: Stack Pointer: points to the top of the stack (LIFO)
> - `rbp`: Base Pointer: points to start of current stack frame
> - `rip`: instruction pointer (instruction CPU executes)
> - `rflags`: CPU status flags (zeroflay, carry, sign, etc.)

## Hello World

In 32-bit x86 assembly:

```assembly
section	.text       ; start of the code segment
   global _start    ; declare _start to be visible in the generated object file
	
_start:	        
   mov	edx,len     ; length of string, third argument to write()
   mov	ecx,msg     ; address of string, second argument to write()
   mov	ebx,1       ; file descriptor (standard output), first argument to write()
   mov	eax,4       ; system call number for write()
   int	0x80        ; system call trap
	
   mov	ebx,0       ; exit code, first argument to exit()
   mov	eax,1       ; system call number for exit()
   int	0x80        ; system call trap

section	.data       ; start of data segment
msg db 'Hello, world!', 0xa  ; string to be printed
len equ $ - msg     ; length of that string as a constant calculated at assembly time
```
###### https://en.wikipedia.org/wiki/Assembly_language#%22Hello,_world!%22_on_x86_Linux