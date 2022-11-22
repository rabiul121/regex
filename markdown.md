# Writing markdown in a easy way

## Some necessary syntax for writing markdown  

### 1. Heading
    Heading starts with hash sign (#)
    - Heading One - One hash (#)
    - Heading Two - Two hash (##)
    - Heading Three - three (###)
    - and so on... up to heading six (######)

### 2. Paragraph

Paragraph starts with empty-line  
To insert a paragraph add an empty line without any character.

### 3. Line Break

Line break can be added with at least two space at the end of the line after which you want the line-break.


### 4. Emphasis

To emphasis on some words/text you can italicize the word/text by adding star sign (*) or underscore sign (_) at the start and end of the words/text.

**Example:**  

        Sundarban is the largest *mangrove forest* in the world  
    or, 
        Sundarban is the largest _mangrove forest_ in the world  

**Output:** Sundarban is the largest *mangrove forest* in the world 


### 5. Bold

To make some words/text bold you can add double star sign (**) or double underscore sign (__) at the start and end of the words/text.

**Example:** 
        
        Sundarban is the largest **mangrove forest** in the world  
    or, 
        Sundarban is the largest __mangrove forest__ in the world  

**Output:** Sundarban is the largest __mangrove forest__ in the world 

### 6. Bold and Italic altogether

To make some words/text bold and italic altogether you can add triple star sign (***) or triple underscore sign (___) at the start and end of the words/text.

**Example:**

        Sundarban is the largest ***mangrove forest*** in the world  
    or, 
        Sundarban is the largest ___mangrove forest___ in the world

**Output:** Sundarban is the largest ***mangrove forest*** in the world 

### 7. Links (inline)

To add inline links follow this syntax:

        [This is link text](This is a link URL)
    or, 
        [This is link text](This is a link URL “This is a title”)
    or,
        [This is link text](/This is a relative URL “This is a title”)

**Example:**

        [Visit my Github profile here](https://github.com/rabiul121)
    or, 
        [Visit my Github profile here](https://github.com/rabiul121 "Github - Md. Rabiul Islam") 

**Output:** [Visit my Github profile here](https://github.com/rabiul121)
 
### 8. Images

To add images follow this syntax:

        ![This is image text](this is an image URL)

**Example:**

        ![Markdown Logo](images/markdown-image.png)

**Output:** ![Markdown Logo](images/markdown-image.png)

### 9. Unordered Lists 

To add list follow the syntax below:

    - Add an asterisks (*), hyphens (-) or plus signs (+) at the start of the list items
    - Example:
            - Banana
            - Apple
            - Orange etc.

**Output:**  

- Banana
- Apple
- Orange etc.


### 10. Ordered Lists 
Format your ordered lists by preceding each list item with a number, followed by a full stop and then a space.

**Example:**

            1. Banana
            2. Apple
            3. Orange etc.

**Output:**  

1. Banana
2. Apple
3. Orange etc.

### 11. Blockquote

You represent any blockquote by preceding the first line of the block quote with a greater-than sign or angle bracket (>).

**Example:**

        > This is a blockquote
        > This is another blockquote  

**Output:** 

  > This is a blockquote  
  > This is another blockquote

### 12. Horizontal rules

A horizontal rule is a useful little element that you can use to visually split up blocks of text within your Markdown file. A horizontal rule is represented by three or more hyphens (-), asterisks (*), or underscores (_). Whichever symbol you use renders the same output.

**Your text will look like this:**
___

### 13. Code blocks and snippets

#### Code Snippets

**Syntax:**

    `Put your Code here`  

**Your text will look like this:**

**Output:** `This is a code snippet`

#### Code blocks

Formatting code blocks is useful when you have a bigger chunk of code to include in your Markdown file. Format your code blocks by indenting every line of your code block using one tab, or four spaces.

**Example:**

    const num1 = 10;    
    const num2 = 20;    
    const sum = num1 + num2;    

### 14. Escaping

Often in Markdown, you will need to include characters in your text (for example, and asterisk) that may be part of the Markdown syntax. You need to “escape” these characters so your Markdown application doesn’t read these characters as formatting.
You escape characters in Markdown using a backslash before the character, with no space in between.

**Your text should look like this:**

    \*
    You can escape any of these characters:
    \ backslash
    ` backtick
    * asterisk
    _ underscore
    {} curly braces
    [] square brackets
    () parentheses
    # hash symbol
    + plus sign
    – minus sign (hyphen)
    . dot
    ! exclamation mark

> This is a blockquote
> * This is a list item within a blockquote
> * This is a list item within a blockquote
> * This is a list item within a blockquote

### 15. HTML

**You can directly add HTML in markdown**
    
    <h4>This is a HTML h4 heading </h4>

**Output:** <h4>This is a HTML h4 heading </h4>