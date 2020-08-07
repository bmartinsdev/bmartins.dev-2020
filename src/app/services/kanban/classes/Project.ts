export class Project {
  id: string;
  title: string;
  date: Date;
  description: string;
  gallery: Array<string> = [];
  tags: Array<any> = [];
  previewUrl: string;
  repoUrl: string;
  hex: string;

  constructor(id: string, project: any = {}) {
    if (id) this.id = id;
    if (project.title) this.title = project.title;
    if (project.date) this.date = project.date;
    if (project.description) this.description = project.description;
    if (project.gallery) this.gallery = project.gallery;
    if (project.tags) {
      this.convertTags(project.tags);
    }
    if (project.previewUrl) this.previewUrl = project.previewUrl;
    if (project.repoUrl) this.repoUrl = project.repoUrl;
    if (project.repoUrl) this.repoUrl = project.repoUrl;
    if (project.hex) this.hex = project.hex;
  }

  convertTags(tags: Array<string>) {
    const tagReferences = {
      "p5.js": "https://p5js.org/",
      javascript: "https://www.javascript.com/",
    };
    for (let tag of tags) {
      this.tags.push({
        name: tag,
        url: tagReferences[tag],
      });
    }
  }
}
