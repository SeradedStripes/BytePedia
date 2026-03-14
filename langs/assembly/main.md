# Assembly

[logo](logo.svg)

Type: Low level programming language
First appeared: 1947
Creator: Early computer scientists (notably Kathleen Booth)

## About

Assembly is a low level programming language that is very close to machine code. It is for high performant applications and it normally used for operating systems and embedded systems. It is a very difficult language to learn and use, but it can be very powerful to use.

## Key Features

> - Low level programming language
> - Very close to machine code
> - High performance
> - Used for operating systems and embedded systems
> - Difficult to learn and use
> - Great for highly experienced programmers who need to write high performance code
> - Not recommended for beginners or general purpose programming

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