import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { Project } from "./classes";
import { v4 as uuid } from "uuid";

//#region callable functions

// Returns active tasks according to user permisssions
// return Task[];
export const activeTasks = functions.https.onCall((data, context) => {
  const db = admin.firestore();
  db.collection("projects")
    .doc("defaultSections")
    .get()
    .then((sectionsData: any) => {
      console.log(sectionsData.data);
    })
    .catch((err: any) => {
      throw new functions.https.HttpsError("unknown", err.message, err);
    });
});

// Returns backlog tasks according to user permisssions
// return Task[];
//export const backlogTasks = functions.https.onCall((data, context) => {});

// Creates a task according to data
// * data:
// ** task: Task
// return Task;
//export const createTask = functions.https.onCall((data, context) => {});

// Receives data with listType and returns project list
// * data:
// ** listType: Boolean
// return Project[];
export const projectsList = functions.https.onCall(async (data, context) => {
  try {
    const snapshot = await admin
      .firestore()
      .collection("projects")
      .doc("listFull")
      .get();
    const projectListData = snapshot.data();
    const projectArray: any = [];

    for (const key in projectListData) {
      projectArray.push({
        id: key,
        ...projectListData[key],
      } as Project);
    }

    return projectArray;
  } catch (error) {
    throw new functions.https.HttpsError("unknown", error.message, error);
  }
});

// Creates a project according to data
// * data:
// ** project: Project
// return uuid of added project;
export const createProject = functions.https.onCall(async (data, context) => {
  try {
    const snapshot = await admin
      .firestore()
      .collection("projects")
      .doc("listFull")
      .get();
    const projectListData: any = snapshot.data();

    const projectUuid = uuid();
    const newProject = new Project(data);

    projectListData[projectUuid] = newProject.save();

    return await admin
      .firestore()
      .collection("projects")
      .doc("listFull")
      .update(projectListData);
  } catch (error) {
    throw new functions.https.HttpsError("unknown", error.message, error);
  }
});

// Updates a project with provided id
// * data:
// ** id: string
// ** project: Project
// return uuid of added project;
export const updateProject = functions.https.onCall((data, context) => {
  const db = admin.firestore();
  db.collection("projects")
    .doc("listFull")
    .get()
    .then((projectListData: any) => {
      let projectList: any = {};
      if (projectListData.data.length) {
        projectList = projectListData.data;
      }
      const newProject = data as Project;

      projectList[data.id] = newProject.save();

      db.collection("projects")
        .doc("listFull")
        .update(projectList)
        .then((updatedProjectData: any) => {
          return updatedProjectData[data.id];
        })
        .catch((err: any) => {
          throw new functions.https.HttpsError("unknown", err.message, err);
        });
    })
    .catch((err: any) => {
      throw new functions.https.HttpsError("unknown", err.message, err);
    });
});

// Removes a project with provided id
// * data:
// ** id: string
// return uuid of removed project;
export const removeProject = functions.https.onCall((data, context) => {
  const db = admin.firestore();
  db.collection("projects")
    .doc("listFull")
    .get()
    .then((projectListData: any) => {
      let projectList: any = {};
      if (projectListData.data.length) {
        projectList = projectListData.data;
      }
      if (projectList[data.id]) {
        delete projectList[data.id];
      } else {
        return false;
      }

      db.collection("projects")
        .doc("listFull")
        .update(projectList)
        .then((updatedProjectData: any) => {
          return updatedProjectData[data.id];
        })
        .catch((err: any) => {
          throw new functions.https.HttpsError("unknown", err.message, err);
        });
    })
    .catch((err: any) => {
      throw new functions.https.HttpsError("unknown", err.message, err);
    });
});

// Move task
//export const moveTask = functions.https.onCall((data, context) => {});

//#region Triggers

// Adds or Updates on list document a simplified version of added project
// export const updateSimpleProject = functions.https.onCall(
//   (data, context) => {}
// );
