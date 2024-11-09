import Controller from "./libs/webServer/Controller";
import clientsCreate from "./libs/webServer/routes/clients/create";
import clientsReadAll from "./libs/webServer/routes/clients/readAll";
import clientsReadByEmail from "./libs/webServer/routes/clients/readByEmail";
import clientsRemove from "./libs/webServer/routes/clients/remove";
import clientsUpdate from "./libs/webServer/routes/clients/update";
import matchesCreate from "./libs/webServer/routes/matches/create";
import matchesReadAll from "./libs/webServer/routes/matches/readAll";
import matchesReadAllByDate from "./libs/webServer/routes/matches/readAllByDate";
import matchesRemove from "./libs/webServer/routes/matches/remove";
import matchesUpdate from "./libs/webServer/routes/matches/update";
import teamsCreate from "./libs/webServer/routes/teams/create";
import teamsReadAll from "./libs/webServer/routes/teams/readAll";
import teamsRemove from "./libs/webServer/routes/teams/remove";
import teamsUpdate from "./libs/webServer/routes/teams/update";

import guessCreate from "./libs/webServer/routes/guess/create";
import guessReadAll from "./libs/webServer/routes/guess/readAll";
import guessReadAllByClient from "./libs/webServer/routes/guess/readAllByClient";
import guessReadAllByDate from "./libs/webServer/routes/guess/readAllByDate";
import guessReadAllByMatch from "./libs/webServer/routes/guess/readAllByMatch";
import guessReadAllByMatchWinner from "./libs/webServer/routes/guess/readAllByMatchWinner";
import guessReadById from "./libs/webServer/routes/guess/readById";
import guessUpdate from "./libs/webServer/routes/guess/update";

import credentials from "./libs/webServer/routes/credentials";
import guessRemove from "./libs/webServer/routes/guess/remove";
import Payment from "./libs/webServer/routes/payment/Payment";

Controller.get("/", () => {
  return { status: "online" };
});

Controller.get("/credentials", credentials);

Controller.post("/payment/create", Payment);
Controller.post("/clients/create", clientsCreate);
Controller.put("/clients/update", clientsUpdate);
Controller.post("/clients/readByEmail", clientsReadByEmail);
Controller.get("/clients/readAll", clientsReadAll);
Controller.remove("/clients/remove", clientsRemove);

Controller.post("/teams/create", teamsCreate);
Controller.put("/teams/update", teamsUpdate);
Controller.get("/teams/readAll", teamsReadAll);
Controller.remove("/teams/remove", teamsRemove);

Controller.post("/matches/create", matchesCreate);
Controller.put("/matches/update", matchesUpdate);
Controller.get("/matches/readAll", matchesReadAll);
Controller.get("/matches/readAllByDate", matchesReadAllByDate);
Controller.remove("/matches/remove", matchesRemove);

Controller.post("/guess/create", guessCreate);
Controller.put("/guess/update", guessUpdate);
Controller.get("/guess/readById", guessReadById);
Controller.get("/guess/readAll", guessReadAll);
Controller.get("/guess/readAllByDate", guessReadAllByDate);
Controller.get("/guess/readAllByMatch", guessReadAllByMatch);
Controller.get("/guess/readAllByClient", guessReadAllByClient);

Controller.get("/guess/readAllByMatchWinner", guessReadAllByMatchWinner);
Controller.remove("/guess/remove", guessRemove);
