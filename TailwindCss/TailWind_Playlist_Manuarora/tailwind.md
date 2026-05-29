# CSS Basics EP-1

## Structure 
    First lean when you building any website how to structure that website.
    - navbar
    - badge 
    - h1 
    - description tag 
    - buttons
    - image
    - background
    - content 
    - container 

# Background-Image Utility
    -background-image: linear-gradient(to bottom,
    white, #dbeafe, white);
    [Color-palette ](https://v3.tailwindcss.com/docs/customizing-colors#default-color-palette)


# Transition 
You have an elements there what type animation you want to show.
1.duration 
2.ease in curve 

# unset 
all: unset - it will remove all style any element who has predefined styles

**Important every css style top down approach happens 
if some style mentioned in the first that item  or element follow the rule

# DIFF -- Padding vs Margin 
- padding is inside border in box model
- margin is outside border in box model

***Sweating the details 


# text shadow (5 fills)
1. horizontal offset then pixels 
    positive for (right) & negative for (left) 

2. then vertical offset then pixels
    positive for down & negative for (up)

3. blur amount in pixels
4. color of that shadow -- you can use color in the beginning or end.

--> text-shadow : horizontal(px) vertical(px) blur(px) color;

note - you can use multiple shadow by separate them by (,).

text-shadow : horizontal(px) vertical(px) blur(px)  color,
                horizontal(px) vertical(px) blur(px)  color;


# box-shadow (6 fills)
1. horizontal offset in pixels
    positive for (right) & negative for (left)
2. vertical offset in pixels
    positive for down & negative for (up)
3. blur amount in pixels (optional)
    higher numbers make the shadow softer and more spread out
4. spread radius in pixels (optional)
    positive expands the shadow size & negative shrinks it
5. color of that shadow
    you can use color in the beginning or end
6. inset keyword (optional)
    changes the shadow from an outer drop shadow to an inner shadow

--> box-shadow: horizontal(px) vertical(px) blur(px) spread(px) color inset;

note - you can use multiple shadows by separating them with a comma ( , ).

box-shadow: horizontal(px) vertical(px) blur(px) spread(px) color,                    
                horizontal(px) vertical(px) blur(px) spread(px) color;






