const Generator = require("yeoman-generator");
const path = require("path");
const pkg = require("./package.json");
const howtoPkgs = Object.keys(pkg.dependencies).filter((dep) =>
  dep.startsWith("@howto")
);

const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  constructor(...args) {
    super(...args);
  }

  async prompting() {
    this.log(yosay(`Welcome to ${chalk.red("generator-howto-package")}!`));

    const typeRes = await this.prompt({
      type: "list",
      name: "package",
      message: "Which howto would you like to clone?",
      choices: howtoPkgs,
    });

    this.props = {};
    this.props.package = typeRes.package;

    this.sourceRoot(
      path.dirname(require.resolve(`${this.props.package}/package.json`))
    );

    while (!this.props.name || this.props.name.length === 0) {
      const nameRes = await this.prompt({
        type: "input",
        name: "name",
        message: `What is the name of your new package?`,
      });

      this.props.name = nameRes.name;

      if (this.props.name.length === 0) {
        this.log(`Please enter a valid package name.`);
      }
    }

    const authorRes = await this.prompt({
      type: "input",
      name: "author",
      message: `What is the author's name? (e.g. - John Doe <john@doe.com>)`,
    });

    this.props.author = typeRes.authorRes;

    const desctiptionRes = await this.prompt({
      type: "input",
      name: "desctiption",
      message: `What's a short description of the new package?`,
    });

    this.props.destination = typeRes.destinationRes;
  }

  async writing() {
    await this.fs.copyAsync(
      this.sourceRoot(),
      this.destinationPath(this.props.name),
      {
        process: (content) => {
          return content
            .toString()
            .replace(this.props.package, this.props.name);
        },
      }
    );

    const newPkg = require(`${this.props.package}/package.json`);
    newPkg.name = this.props.name;
    newPkg.author = this.props.author;
    newPkg.description = this.props.description;
    newPkg.version = "0.0.1";
    newPkg.repository = undefined;

    this.fs.writeJSON(
      this.destinationPath(`${this.props.name}/package.json`),
      newPkg
    );
  }
};
