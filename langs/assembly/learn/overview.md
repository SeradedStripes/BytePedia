# Learning Assembly

## Goal

- Teach x86-64 NASM ASM
- Cover setup, writing code, compiling, debugging, system interaction
- Platform-agnostic: Windows and Linux

## Setup and Tools

### Linux:
- NASM: `sudo apt install nasm`, `sudo pacman -S nasm`
- GCC: `sudo apt install gcc`, `sudo pacman -S gcc`
- GDB: `sudo apt install gdb`, `sudo pacman -S gdb`

### Windows:
- NASM Windows binaries
- MinGW for linking
- Debuggers like x64dbg or WinDbg

## Chapter Flow

1. Registers
 - General + special registers
 - Mini Exercises + tables + diagrams
 - Example programs

2. Stack and Memory
  - Push/pop/call/ret
  - `.data`, `.bss`, `.text` sections
  - Visual stack diagrams + exercises

3. Instructions + Arithmetic
  - `mov`, `add`, `sub`, `mul`, `div`, `cmp`. jumps
  - How CPU executes instructions
  - Exercises for flow control

4. Loops and Conditions
  - Conditional Jumps, label tricks
  - Build loops manually
  - Exercises: print numbers, reverse strings

5. Syscalls & OS Interaction
  - Linux: `rax` syscall numbers, `rdi/rsi/rdx` args
  - Windows: API calls/interrupts
  - Exercises: print, read input, exit

6. File + I/O operations
  - Reading/Writing files on Linux/Windows
  - Using syscalls or API functions
  - Example programs + memory handling

7. Mini Project
  - calculator
  - string manipulator
  - Tiny text editor (basic I/O + file handling)

8. Kernel/OS experiments
  - Writing a simple bootloader
  - Interacting with hardware
  - Combine registers + stack + memory + syscalls

9. Summary of everything and next steps
  - Recap of all topics covered

## Advanced Topics (Optional)
- SIMD instructions (SSE/AVX)
- Calling conventions (cdecl, stdcall)
- Performance optimization techniques
- Reverse engineering basics
- Writing shellcode

### Goal

- Take ASM knowledge from beginner to expert
- Cover optimization, system internals, advanced CPU instructions, reverse engineering
- Prepare readers for OS dev, compilers, and low-level programming projects

### Chapter Flow

1. SIMD/Vector Instructions
  - **What it is**: SSE/AVX/MMX for parallel operations
  - **Why it matters**: Fast math, graphics, audio, performance-critical code
  - **Flow**:
    - Introduce Vector registers (xmm0-xmm15)
    - Basic operations (addps, mulps, movaps)
    - Exercises: vector addition, dot product
    - Examples: simple array compuations, image processing

2. Calling Conventions
  - **What it is**: Rules for passing arguments, return values, preserving registers
  - **Why it matters**: Interoperability with C/C++ code, system APIs
  - **Flow**:
    - `cdecl`, `stdcall`, `fastcall` conventions and explain
    - Registers & stack usage for each
    - Mini exercises: Write ASM functions that follow each convention
    - Example: ASM functions callable from C code

3. Performance Optimization
  - **What it is**: Writing ASM that runs faster and smaller/simpler
  - **Why it matters**: Critical for game dev, embedded systems, high-performance code
  - **Flow**:
    - Instruction pipelining, latency, throughput concepts
    - Common optimization techniques (loop unrolling, minimizing memory access)
    - Register allocation tips and strategies
    - Avoid unnecessary instructions and memory access
    - Examples: optimise small loop for speed
    - Exercises: optimize a simple function for performance

4. Reverse Engineering Basics
  - **What it is**: Understanding compiled code without source, using disassemblers/debuggers
  - **Why it matters**: Security research, malware analysis, understanding legacy code
  - **Flow**:
    - Use `objdump`, `gdb`, or x64dbg to analyze compiled binaries
    - Identify functions, jumps, system calls
    - Exercises: reverse engineer a simple compiled C program, identify its logic
    - Example: analyze a simple "Hello World" binary, understand how it works

5. Writing Shellcode
  - **What it is**: Small and self-contained ASM code that can be injected and executed
  - **Why it matters**: Exploit development, security research, understanding low-level code execution
  - **Flow**:
    - Write simple shellcode (spawn a shell, read a file)
    - Techniques for making shellcode position-independent and small
    - Exercises: write shellcode to execute a command or read a file
    - Example: create a simple reverse shell in assembly

6. Shellcode Development and Exploitation
  - **What it is**: Crafting shellcode for specific exploits and understanding how to bypass common defenses
  - **Why it matters**: Advanced security research, exploit development, understanding modern defenses
  - **Flow**:
    - Techniques to evade detections (encoding, polymorphic shellcode)
    - Bypassing common defenses (DEP, ASLR)
    - Exercises: create shellcode that evades simple detection, analyze a vulnerable program, create shellcode to exploit it
    - Example: create a simple buffer overflow exploit using shellcode

7. Advanced Projects
  - Writing your own simple OS kernel
  - Implementing a basic scheduler
  - Interacting with hardware devices (e.g., keyboard, screen)
  - Building a simple programming language interpreter in assembly

8. Summary of everything and next steps
  - Recap of all topics covered

## Master Minds

ASM & Low Level Mastery

### Goal:

- Go beyond x86-64 NASM and explore other architectures (ARM, RISC-V)
- Cover cross-platform development, embedded systems, and OS development
- Develop better understanding and mindsets for low-level programming

## Chapter Flow

1. **ARM/RISC-V Architecture**
  - **What it is**: Alternative CPU architectures used in mobile devices, embedded systems and in other devices
  - **Why it matters**: ARM is dominant in mobile, RISC-V is gaining popularity for open hardware and education
  - **Flow**:
    - Compare x86 to ARM and RISC-V architectures
    - Key differences from x86-64
    - Writing simple programs in ARM/RISC-V assembly
    - Exercises: porting simple x86-64 programs to ARM/RISC-V

2. **Cross-Platform Development**
  - **What it is**: Writing assembly code that can run on multiple platforms with minimal to no changes
  - **Why it matters**: Increases the reach of your code, allows you to go for many platforms without learning new assembly languages
  - **Flow**:
    - Writing assembly code that can be compiled on multiple platforms
    - Using conditional assembly and macros for platform-specific code
    - Example: writing a simple "Hello World" that works on both Windows and Linux

3. **Virtual Machines and Emulators**
  - **What is it**:
  - **Why is matters**: Learn how CPUs execute instructions, language runtimes and sandbox environments work
  - **Flow**:
    - Write a stack based virtual machine in assembly
    - Build interpreter for mini instruction set
    - Example: simple bytecode interpreter in assembly, emulate your own small CPU
    - Exercises: Simple VM programs, extend VM with new instructions

4. **Embedded Systems Programming**
  - **What it is**: Programming for microcontrollers and other embedded devices using asm
  - **Why it matters**: Embedded systems are everywhere, and often need low-level programming for performance and resource constraints
  - **Flow**:
    - Setting up toolchains for embedded development
    - Writing for microcontrollers
    - Example: blinking an LED, reading a sensor using assembly on an embedded device
    - Exercises: simple embedded projects, like a digital thermometer or a small game on an embedded display

5. **Cryptography and Security**
  - **What it is**: Implementing cryptographic algorithms and security primitives in assembly
  - **Why it matters**: Security, system integrity, understanding encryption and hashing at a low level
  - **Flow**:
    - Implementing basic cryptographic algorithms
    - Implement a simple cipher
    - Exercises: encrypt/decrypt memory blocks
    - Introduce side-channel attacks and mitigations

## Learning Resources

- **Youtube**: Soon to be added: video tutorials covering each chapter
- **Cheat Sheets**: Available in each Section
- **Example Code**: Provided for each topic, with explanations