const Generator = require("yeoman-generator");
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

    this.sourceRoot(require.resolve(`__package-root__/package.json`));

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
  }

  writing() {
    console.log(this.props, this.sourceRoot());
    // let templatePath;
    // switch (this.props.package) {
    //   case TYPE_ENUM.REACT_COMPONENT:
    //     templatePath = this.templatePath('component');
    //     break;
    //   case TYPE_ENUM.CLIENT_LIB:
    //     templatePath = this.templatePath('lib');
    //     break;
    //   default:
    //     throw new Error(`Unknown type: ${this.props.package}`);
    // }

    // this.renderTemplate(
    //   templatePath,
    //   this.destinationPath(`packages/${this.props.name}`),
    //   this.props
    // );
  }
};
