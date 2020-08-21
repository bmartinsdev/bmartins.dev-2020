import * as projects from "./projects";
import * as globalFunctions from "./global";

import * as admin from "firebase-admin";
admin.initializeApp();

export const activeTasks = projects.activeTasks;
// export const backlogTasks = projects.backlogTasks;
// export const createTask = projects.createTask;
// export const moveTask = projects.moveTask;

// Project CRUD
export const projectsList = projects.projectsList;
export const createProject = projects.createProject;
//export const updateSimpleProject = projects.updateSimpleProject;
export const removeProject = projects.removeProject;

// GLOBAL
export const getSnakeScore = globalFunctions.getSnakeScore;
export const updateSnakeScore = globalFunctions.updateSnakeScore;
