# What is this?
The orchestrator for all the microservices for the display board!

## Where is it being hosted???
Good try, I'm not putting the API link here, silly! You can host it yourself! I will make a list of required environment variables soon!
I'm using digital ocean droplets though!


## Why'd you do this?
Because I never found a display board with enough customizability for me. Also I wanted to make a microservice based API on my own and I never really had the chance to learn react

## Links to all project code bases!

[React App](https://github.com/jayjayb772/Display-ReactApp)

[Orchestrator](https://github.com/jayjayb772/Display-orchestrator)

[CTAPI](https://github.com/jayjayb772/Display-CTAPI)

[WeatherAPI](https://github.com/jayjayb772/Display-Weather)

[DiscordBot](https://github.com/jayjayb772/1925-discord-bot)

---







## Controllers and Endpoints
- **_CTAController_**
    - {{baseURL}}/**cta**
    ---
        - {{baseURL}}/cta/**train-times**
            - Method: GET
            - Query: name={Station name}, color={Train color}
                - Required: No
                - Defaults: name=Montrose, color=Brown
            - Example: {{baseURL}}/cta/train-times?name=Fullerton&color=Red
            - Response: Array of JSON Objects, 200 OKAY
    ---
---           
- _DiscordController_
    - {{baseURL}}/**discord**
    ___
        - {{baseURL}}/discord/push-event
            - Method: POST
            - Body: JSON OBJECT, sent from Github
                - Required Params:
                    - body.repository.name
                    - body.commits[0].message
                    - body.repository.url
                - Optional Params:
                    - body.commits[0].removed
                    - body.commits[0].added
                    - body.commits[0].modified
                    - body.head_commit.url
            - Response: 200 OKAY
    ___
    ___
        - {{baseURL}}/discord/display-error
            - Method: POST
            - Body: JSON OBJECT, sent from Github
                - Required Params:
                    - body
            - Error sent from webpage to discord for review
            - Response: 200 OKAY
    ___
---
- **_WeatherController_**
    - {{baseURL}}/**weather**
    ___
        - {{baseURL}}/weather/forecast-now
            - Method: GET
            - Query: city={U.S. City}, state={State city is in}
                - Required: No
                - Defaults: city=Chicago, state=Illinois
            - Example: {{baseURL}}/weather/forecast-now?city=Evanston&state=Illinois
            - Response: JSON Object, 200 OKAY
    ___
    ___
        - {{baseURL}}/weather/forecast-week
            - Method: GET
            - Query: city={U.S. City}, state={State city is in}
                - Required: No
                - Defaults: city=Chicago, state=Illinois
            - Example: {{baseURL}}/weather/forecast-week?city=Evanston&state=Illinois
            - Response: Array of JSON Objects, 200 OKAY
    ___
---  
- **_MessagingServiceController_**
    - path: {{baseURL}}/messaging-service
---
- **_CommitController_**
    - path: {{baseURL}}/commit
        ___
            - {{baseURL}}/commit/push-event
                - Method: POST
                - Body: JSON OBJECT, sent from Github
                    - Required Params:
                        - body.repository.name
                        - body.commits[0].message
                        - body.repository.url
                    - Optional Params:
                        - body.commits[0].removed
                        - body.commits[0].added
                        - body.commits[0].modified
                        - body.head_commit.url
                - Response: 200 OKAY
        ___


# Express Server Template

https://github.com/sockjs/sockjs-node/blob/master/examples/express/server.js
