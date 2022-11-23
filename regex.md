# Regex

## What is regex?

Regex is the short form of **Regular Expression**. Using regex we can find some **matches** or **patterns** from the text or strings.

**Regex are used:**
- To validate email
- To validate password
- To validate other forms inputs in website
- To find or search something

**Regex Online Validator**

[Regex101](https://www.regex101.com)

1. Regular expression goes between two back slash (\\)
2. **\g** indicate global flag - it matches every matches (more than one if exists)
3. **\i** indicates case insensitive (matches both lowercase abd uppercase)
4. [] matches single character
5. [ab] matches either **a** or **b**
6. [^b] matches other than **b**
7. [a-z] matches from **a** to **z** any character 
8. **+** matches at least one or more character
9. **?** - matches zero-or-one (indicates optional)
10. **.** - matches any character except new line
11. **^** - indicate the start of the regex/string
12. **$** - indicate the end of the regex/string
13. **'*'** - matches zero-or-more character
14. [0-9]{11} - matches 0 to 9 any number with a length of 11
15. **[a-z]{5,8}** - matches any character between a and z of the length between 5 to 8
16. **[a-z]{5,}** - matches any character between a and z of the length at least 5 and more
17. **\d** - matches any digit (alternative to [0-9])
18. **\w** - matches any word characters (a-z, A-Z, 0-9, ans _'s)
19. **\s** - matches whitespace characters (tab, spaces, etc.)
20. **\t** - matches only tab characters
21. **(pet|toy|crazy) rabbit** - matches pet or toy or crazy rabbit (capture group)  