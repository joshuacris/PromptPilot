# PromptPilot

## Inspiration

Everyone wants to make the most out of using their favourite LLM. Many people, whether in tech or not, are not familiar with the complicated techniques of prompt engineering. Wanting to optimize how we use our LLMs, we wanted to create a tool that optimizes our prompts for us in one place.

## What it does

PromptPilot is a Chrome Extension that allows you to input your LLM prompt, and it outputs an optimized prompt that is tailored to your needs. An example would be turning the input: "Explain object-oriented programming" into "Explain the core principles of object-oriented programming (OOP), including concepts like encapsulation, inheritance, polymorphism, and abstraction. Provide examples in Python to illustrate how these principles are implemented in code." - which provides a more thorough response from LLMs to help you learn better.

## How we built it

We used Plasmo and React for the Chrome Extension frontend, Flask for the backend, and implement our optimization techniques using Cohere's newest Command A LLM.

## Challenges we ran into

The biggest challenge was learning how to use Plasmo and adjust it to how we wanted our extension to look. 

## Accomplishments that we're proud of

We're proud of learning how to integrate LLMs into a project we can use in real life!

## What we learned

We learned how to better engineer our prompts, integrate LLMs into software, and create a Chrome extension.

## What's next for PromptPilot

To scale and optimize it further to minimize its impact on the environment, as well as add a feature for remembering information about its user.

## Extra 

Install requirements with pip install -r requirements.txt

