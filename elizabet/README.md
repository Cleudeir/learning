# ElizaBet Web Server TypeScript NodeJs

## PROJECT BASIC CONFIGURABLE

<h3>TYPESCRIPT + NOFETCH + NODEMON + SUCRASE + EXPRESS</h3>

    "sucrase": "^3.31.0",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "node-fetch": "^3.3.1"

## Clients

```
POST "/client/create"
body: {
    email:     string;
    password:  string;
    pixKey:    string;
    permission: 'admin' | 'user';
}
return interface {
    clientId:  number;
    email:     string;
    pixKey:    string;
    permission: string;
    updatedAt: Date;
    createdAt: Date;
    | error: string;
}

```

```
PUT "/client/update"
body: {
    clientId:  number;
    email?:     string;
    password?: string;
    pixKey?:    string;
    permission?: 'admin' | 'user';
}
return interface {
    clientId:  number;
    email:     string;
    pixKey:    string;
    permission: string;
    createdAt: Date;
    updatedAt: Date;
    | error: string;
}

```

```
POST "/client/readByEmail"
body: {
    email:     string;
    password:  string;
}
return interface {
    clientId:  number;
    email:     string;
    pixKey:    string;
    permission: string;
    createdAt: Date;
    updatedAt: Date;
    | error: string;
}

```

```
DELETE "/client/remove?clientId={id}"

return interface  {
    message?:  string;
    | error: string;
}

```

```
GET "/client/readAll"

return interface {
    clientId:  number;
    email:     string;
    pixKey:    string;
    permission: string;
    createdAt: Date;
    updatedAt: Date;

}[] | [] | error: string;
```

## Guess

```
POST "/guess/create"
body: {
    homeTeamGuess:   number;
    awayTeamGuess:   number;
    paymentMethod:   string;
    value:           number;
    matchId:         number;
    clientId:        number;
}
returns interface {
    guessId:         number;
    homeTeamGuess:   number;
    awayTeamGuess:   number;
    paymentRequest:  string;
    paymentResponse: string;
    paymentMethod:   string;
    value:           number;
    matchId:         number;
    clientId:        number;
    updatedAt:       Date;
    createdAt:       Date;
    | error: string;
}
```

```
PUT "/guess/update"
body:  {
    guessId:         number;
    homeTeamGuess?:  number;
    awayTeamGuess?:  number;
    paymentMethod?:  string;
    value?:          number;
    winnings?:       number;
    paid?:           boolean;
    matchId?:        number;
    clientId?:       number;
}
returns interface {
    guessId:         number;
    homeTeamGuess:   number;
    awayTeamGuess:   number;
    paymentMethod:   string;
    value:           number;
    winnings:        number;
    paid:            boolean;
    matchId:         number;
    clientId:        number;
    createdAt:       Date;
    updatedAt:       Date;
    match:
    {
        homeTeamName: string;
        awayTeamName: string;
        homeTeamScore: number;
        awayTeamScore: number
        matchDate:     Date;
    };
    client:
    {
        email:     string;
        pixKey:    string;
        permission: string;
    };
    | error: string;
}

```

```
DELETE "/guess/remove?guessId={id}"

returns interface {
    message:  string;
    | error: string;
}
```

```
GET "/guess/readById?id={id}"

returns interface {
    guessId:         number;
    homeTeamGuess:   number;
    awayTeamGuess:   number;
    paymentMethod:   string;
    value:           number;
    winnings:        number;
    paid:            boolean;
    matchId:         number;
    clientId:        number;
    createdAt:       Date;
    updatedAt:       Date;
    match:
    {
        homeTeamName:  string;
        awayTeamName:  string;
        matchDate:     Date;
    };
    client:
    {
        email:      string;
        pixKey:     string;
        permission: string;
    };
    | error: string;
}
```

```
GET "/guess/readAll"

returns interface {
    guessId:         number;
    homeTeamGuess:   number;
    awayTeamGuess:   number;
    paymentMethod:   string;
    value:           number;
    winnings:        number;
    paid:            boolean;
    matchId:         number;
    clientId:        number;
    createdAt:       Date;
    updatedAt:       Date;
    match:
    {
        homeTeamName:  string;
        awayTeamName:  string;
        matchDate:     Date;
    };
    client:
    {
        email:      string;
        pixKey:     string;
        permission: string;
    };
}[] | [] | error: string;

```

```
GET "/guess/readAllByDate?date={Date}&type={"after" | "before" | "now"}"

returns interface {
    guessId:         number;
    homeTeamGuess:   number;
    awayTeamGuess:   number;
    paymentMethod:   string;
    value:           number;
    winnings:        number;
    paid:            boolean;
    matchId:          number;
    clientId:        number;
    createdAt:       Date;
    updatedAt:       Date;
    match:
    {
        homeTeamName: string;
        awayTeamName: string;
        matchDate:     Date;
    };
    client:
    {
        email:     string;
        pixKey:    string;
        permission: string;
    };
}[] | [] | error: string;

```

```
GET "/guess/readAllByMatch?matchId={id}"

returns interface {
    guessId:         number;
    homeTeamGuess:   number;
    awayTeamGuess:   number;
    paymentMethod:   string;
    value:           number;
    winnings:        number;
    paid:            boolean;
    matchId:         number;
    clientId:        number;
    createdAt:       Date;
    updatedAt:       Date;
    match:
    {
        homeTeamName: string;
        awayTeamName: string;
        matchDate:     Date;
    };
    client:
    {
        email:     string;
        pixKey:    string;
        permission: string;
    };
}[] | [] | error: string;

```

```
GET "/guess/readAllByClient?clientId={id}"

returns interface {
    guessId:         number;
    homeTeamGuess:   number;
    awayTeamGuess:   number;
    paymentMethod:   string;
    value:           number;
    winnings:        number;
    paid:            boolean;
    matchId:         number;
    clientId:        number;
    createdAt:       Date;
    updatedAt:       Date;
    match:
    {
        homeTeamName: string;
        awayTeamName: string;
        matchDate:     Date;
    };
    client:
    {
        email:     string;
        pixKey:    string;
        permission: string;
    };
}[] | [] | error: string;

```

```
GET "/guess/readAllByMatchWinner?matchId={id}"

returns interface
    {
        guessId:      number;
        paymentMethod: string;
        value:       number;
        winnings: number;
        paid:         boolean;
        clientId:     number;
        createdAt:    Date;
        updatedAt:    Date;
        client:
        {
            email:     string;
            pixKey:    string;
            permission: string;
        };
    }[] | [] | error: string;

```

## Matches

```
POST "/matches/create"
body: {
    homeTeamName: string;
    awayTeamName: string;
    matchDate:    Date;
}
returns interface {
    matchId:        number;
    homeTeamName:   string;
    awayTeamName:   string;
    matchDate:      Date;
    updatedAt:      Date;
    createdAt:      Date;
    | error: string;
}

```

```
PUT "/matches/update"
body:  {
    matchId:        number;
    homeTeamScore?: number;
    awayTeamScore?: number;
    homeTeamName?:  string;
    awayTeamName?:  string;
    matchDate?:     Date;
}
returns interface {
    matchId:        number;
    homeTeamScore?: number;
    awayTeamScore?: number;
    homeTeamName:   string;
    awayTeamName:   string;
    matchDate:      Date;
    updatedAt:      Date;
    createdAt:      Date;
    | error: string;
}

note: If the score is changed, it will return the new score.

```

```
DELETE "/matches/remove?matchId={id}"

returns interface {
    message:  string;
    | error: string;
}

```

```
GET "/matches/readAll"

returns interface {
    matchId:        number;
    homeTeamScore?: number;
    awayTeamScore?: number;
    homeTeamName:   string;
    awayTeamName:   string;
    matchDate:      Date;
    updatedAt:      Date;
    createdAt:      Date;
}[] | [] | error: string;

note: It will only return the score of the matches that have been defined.

```

```
GET "/matches/readAllByDate?date={Date}&type={"after" || "before" || "now"}"

returns interface {
    matchId:        number;
    homeTeamScore?: number;
    awayTeamScore?: number;
    homeTeamName:   string;
    awayTeamName:   string;
    matchDate:      Date;
    updatedAt:      Date;
    createdAt:      Date;
}[] | [] | error: string;

```

## Teams

```
POST "/teams/create"

body: {
    name:   string;
}
returns interface {
    teamId:    number;
    name:      string;
    updatedAt: Date;
    createdAt: Date;
    | error: string;
}

```

```
PUT "/teams/update"

body:  {
    teamId:   number;
    name:     string;
}
returns interface {
    teamId:    number;
    name:      string;
    updatedAt: Date;
    createdAt: Date;
    | error: string;
}

```

```
DELETE "/teams/remove?idTime={id}"

returns interface {
    message:  string;
    | error: string;
}

```

```
GET "/teams/readAll"

returns interface {
    teamId:    number;
    name:      string;
    updatedAt: Date;
    createdAt: Date;
}[] | [] | error: string;

```
