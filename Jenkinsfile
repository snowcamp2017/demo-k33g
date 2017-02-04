node {
  stage 'Checkout'
  checkout scm

  stage 'Build'
  def nodeHome = tool name: 'NodeJS-750', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
  env.PATH = "${nodeHome}/bin:${env.PATH}"

  sh "npm install"
  sh "npm test"
}
