# OpenShift V3 / Kubernetes

You'll need the `oc` command line tool to install this project in a Docker-based OpenShift environment.  The cli tool binary is available via the [`openshift/origin` releases page](https://github.com/openshift/origin/releases/).

Use [vagrant](http://openshift.org/vm) or [ansible](https://github.com/openshift/openshift-ansible) to setup your own deployment of OpenShift, then use `oc login` to authenticate. These instructions assume that a basic [nodejs builder image](https://github.com/openshift/origin/tree/master/examples/image-streams) has already been made available in the `openshift` project by an admin.

Build and deploy the application from the command line using the `oc` command line tool, and a nodejs builder image:

    oc new-app openshift/nodejs~https://github.com/ryanj/pillar-base

After your deployment has completed, find the pod NAME for your hosted container:

    oc get pods

Push changes from a local repo into this environment using the pod NAME from the previous step, allowing you to test your changes without stopping to make a commit:

    oc rsync --exclude='node_modules*' . YOUR_PODNAME:


# Local Development
Install dependencies:

```bash
npm install
```

Start a local server:

```bash
npm start
```

## License: MIT
