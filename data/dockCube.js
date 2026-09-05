export const questionBank = [
{
"id": 1,
"question": "You have just executed \"docker swarm leave\" on a node. What command can be run on the same node to confirm it has left the cluster?",
"options": [
"docker node ls",
"docker system info",
"docker swarm status",
"docker node inspect"
],
"answer": "docker system info"
},
{
"id": 2,
"question": "The server is running low on disk space. What command can be used to check disk usage of images, containers, and volumes?",
"options": [
"docker system df",
"docker disk usage",
"docker container df",
"docker image usage"
],
"answer": "docker system df"
},
{
"id": 3,
"question": "Which Dockerfile instruction initializes a new build stage and sets the base image?",
"options": [
"RUN",
"FROM",
"CMD",
"ENTRYPOINT"
],
"answer": "FROM"
},
{
"id": 4,
"question": "Which command automatically creates a volume when a container is started?",
"options": [
"docker volume create nginx-test",
"docker container run --name nginx-test --volume /app nginx",
"docker volume attach nginx-test",
"docker run --storage nginx"
],
"answer": "docker container run --name nginx-test --volume /app nginx"
},
{
"id": 5,
"question": "What is the Docker command to add or update a published port?",
"options": [
"docker service port-update",
"docker service expose",
"docker service update --publish-add",
"docker service publish"
],
"answer": "docker service update --publish-add"
},
{
"id": 6,
"question": "What service mode is used to deploy a single task of a service to each node?",
"options": [
"Replicated",
"Global",
"Cluster",
"Distributed"
],
"answer": "Global"
},
{
"id": 7,
"question": "Which description best fits a DaemonSet?",
"options": [
"A controller that manages deployments",
"A way to run a copy of a pod on all or some nodes",
"A service that balances traffic between pods",
"A pod that runs only once"
],
"answer": "A way to run a copy of a pod on all or some nodes"
},
{
"id": 8,
"question": "Docker command to connect a running container to an existing user-defined bridge network?",
"options": [
"docker network attach",
"docker network connect",
"docker container network",
"docker network add"
],
"answer": "docker network connect"
},
{
"id": 9,
"question": "Docker command to display detailed information on one or more networks?",
"options": [
"docker network inspect",
"docker network info",
"docker inspect network",
"docker network show"
],
"answer": "docker network inspect"
},
{
"id": 10,
"question": "In Kubernetes, a node is:",
"options": [
"A container registry",
"A worker machine",
"A cluster service",
"A control plane component"
],
"answer": "A worker machine"
},
{
"id": 11,
"question": "What is the default format of docker inspect output?",
"options": [
"XML",
"YAML",
"JSON",
"TXT"
],
"answer": "JSON"
},
{
"id": 12,
"question": "What is a label in Kubernetes?",
"options": [
"A security rule for pods",
"A way to group related things using key/value pairs",
"A network configuration",
"A container runtime setting"
],
"answer": "A way to group related things using key/value pairs"
},
{
"id": 13,
"question": "Docker command to find the current logging driver for a running container?",
"options": [
"docker logs",
"docker inspect",
"docker info",
"docker container info"
],
"answer": "docker inspect"
},
{
"id": 14,
"question": "Docker command to see the storage driver Docker is currently using?",
"options": [
"docker storage",
"docker inspect",
"docker system df",
"docker info"
],
"answer": "docker info"
},
{
"id": 15,
"question": "What does docker image prune do?",
"options": [
"Removes all images",
"Removes unused images",
"Removes running containers",
"Removes unused volumes"
],
"answer": "Removes unused images"
},
{
"id": 16,
"question": "What manages assigning nodes to pods depending on resource availability?",
"options": [
"Controller Manager",
"Scheduler",
"API Server",
"Kubelet"
],
"answer": "Scheduler"
},
{
"id": 17,
"question": "What can you deploy on Kubernetes?",
"options": [
"Virtual Machines",
"Containers",
"Operating Systems",
"Drivers"
],
"answer": "Containers"
},
{
"id": 18,
"question": "Which command is used to create a service in Kubernetes?",
"options": [
"kubectl service create",
"kubectl expose",
"kubectl create service",
"kubectl deploy service"
],
"answer": "kubectl expose"
}
,
{
"id": 19,
"question": "Which command is used to create a service?",
"options": [
"kubectl service create",
"kubectl expose",
"kubectl create service",
"kubectl deploy service"
],
"answer": "kubectl expose"
},
{
"id": 20,
"question": "What is the function of a node?",
"options": [
"To manage the control plane",
"To run pods according to master components",
"To store container images",
"To configure network policies"
],
"answer": "To run pods according to master components"
},
{
"id": 21,
"question": "OpenShift is based on which container orchestration platform?",
"options": [
"Docker Swarm",
"Kubernetes",
"Mesos",
"Nomad"
],
"answer": "Kubernetes"
},
{
"id": 22,
"question": "What is a Pod?",
"options": [
"A single container instance",
"A group of one or more application containers with shared volumes and IP address",
"A Kubernetes service object",
"A container image repository"
],
"answer": "A group of one or more application containers with shared volumes and IP address"
},
{
"id": 23,
"question": "A ______ ensures that all nodes run a copy of a pod.",
"options": [
"ReplicaSet",
"Deployment",
"DaemonSet",
"StatefulSet"
],
"answer": "DaemonSet"
},
{
"id": 24,
"question": "What is a Kubernetes volume?",
"options": [
"A storage driver for Docker",
"A directory for data accessible to containers in a pod",
"A network configuration for pods",
"A backup container"
],
"answer": "A directory for data accessible to containers in a pod"
},
{
"id": 25,
"question": "Which command removes the cluster-admin role from a user?",
"options": [
"oc adm policy remove-role-from-user",
"oc adm policy remove-cluster-role-from-user",
"kubectl remove cluster-role",
"kubectl delete cluster-admin"
],
"answer": "oc adm policy remove-cluster-role-from-user"
},
{
"id": 26,
"question": "What is a kubelet?",
"options": [
"A Kubernetes scheduler component",
"A node agent that manages pods and their containers",
"A container runtime engine",
"A Kubernetes network plugin"
],
"answer": "A node agent that manages pods and their containers"
},
{
"id": 27,
"question": "What is the intended use of etcd?",
"options": [
"To run container workloads",
"To store all cluster data and maintain cluster state",
"To manage container networking",
"To schedule pods on nodes"
],
"answer": "To store all cluster data and maintain cluster state"
},
{
"id": 28,
"question": "Docker command to increase the number of replicas?",
"options": [
"docker service scale",
"docker service update",
"docker container scale",
"docker scale service"
],
"answer": "docker service scale"
},
{
"id": 29,
"question": "Docker command to display layers of a Docker image?",
"options": [
"docker image layers",
"docker inspect image",
"docker history",
"docker image show"
],
"answer": "docker history"
},
{
"id": 30,
"question": "What is the result of \"kubectl exec -ti my-pod-name bash\"?",
"options": [
"Restarts the pod",
"Opens a console on the first container inside the pod",
"Deletes the pod",
"Shows pod logs"
],
"answer": "Opens a console on the first container inside the pod"
},
{
"id": 31,
"question": "Which Docker commands can be used to find all port mappings?",
"options": [
"docker inspect, docker ps, docker port",
"docker network inspect, docker ps",
"docker ports, docker inspect",
"docker container ports, docker list"
],
"answer": "docker inspect, docker ps, docker port"
},
{
"id": 32,
"question": "What does Dockerfile LABEL do?",
"options": [
"Adds metadata to an image",
"Creates a new container",
"Defines container entrypoint",
"Specifies exposed ports"
],
"answer": "Adds metadata to an image"
},
{
"id": 33,
"question": "At its core Kubernetes is a platform for:",
"options": [
"Running and scheduling container applications on a cluster",
"Managing virtual machines",
"Building Docker images",
"Storing container registries"
],
"answer": "Running and scheduling container applications on a cluster"
},
{
"id": 34,
"question": "Which command shows volumes for a specific container?",
"options": [
"docker volume list",
"docker inspect",
"docker container volume",
"docker volume inspect"
],
"answer": "docker inspect"
},
{
"id": 35,
"question": "Docker command to update an existing service?",
"options": [
"docker service update",
"docker update service",
"docker service modify",
"docker container update"
],
"answer": "docker service update"
}, 
{
"id": 36,
"question": "Docker command to update an existing service?",
"options": [
"docker service update",
"docker service create",
"docker update service",
"docker service modify"
],
"answer": "docker service update"
},
{
"id": 37,
"question": "What runs on each node to ensure containers are running in a pod?",
"options": [
"kube-proxy",
"kubelet",
"etcd",
"kubectl"
],
"answer": "kubelet"
},
{
"id": 38,
"question": "What does Dockerfile EXPOSE do?",
"options": [
"Opens the port on host automatically",
"Publishes container port to internet",
"Informs Docker that the container listens on the specified port",
"Creates a new network port"
],
"answer": "Informs Docker that the container listens on the specified port"
},
{
"id": 39,
"question": "What is true about using -P option in Docker?",
"options": [
"Binds container port to fixed host port",
"Docker binds each exposed container port to a random host port",
"Disables exposed ports",
"Publishes only port 80"
],
"answer": "Docker binds each exposed container port to a random host port"
},
{
"id": 40,
"question": "Difference between ADD and COPY in Dockerfile?",
"options": [
"ADD supports remote URL handling, COPY does not",
"COPY supports remote URL handling, ADD does not",
"Both are exactly the same",
"COPY automatically extracts files"
],
"answer": "ADD supports remote URL handling, COPY does not"
},
{
"id": 41,
"question": "What is a cluster?",
"options": [
"A single container system",
"A single system made up of several other resources",
"A network port collection",
"A container image repository"
],
"answer": "A single system made up of several other resources"
},
{
"id": 42,
"question": "Command to display Docker configuration on host?",
"options": [
"docker config",
"docker host info",
"docker info",
"docker status"
],
"answer": "docker info"
},
{
"id": 43,
"question": "Function of a node in Kubernetes?",
"options": [
"To store container images",
"To run pods according to master components",
"To manage user authentication",
"To store cluster configuration"
],
"answer": "To run pods according to master components"
},
{
"id": 44,
"question": "Which command provides users edit access to developers group?",
"options": [
"oc adm policy add-role-to-group edit developers -n develop",
"oc adm grant edit developers",
"oc role add developers edit",
"kubectl role add developers"
],
"answer": "oc adm policy add-role-to-group edit developers -n develop"
},
{
"id": 45,
"question": "Default port to access WebSphere Application Server console?",
"options": [
"8080",
"7001",
"9080",
"9443"
],
"answer": "9080"
},
{
"id": 46,
"question": "What is proxy service used for?",
"options": [
"To store containers",
"To act as an intermediary between endpoint servers",
"To manage images",
"To deploy pods"
],
"answer": "To act as an intermediary between endpoint servers"
},
{
"id": 47,
"question": "Which servers run Kubernetes control components in OpenShift?",
"options": [
"Workers",
"Masters",
"Nodes",
"Agents"
],
"answer": "Masters"
},
{
"id": 48,
"question": "Which resource sets default request/limit for containers?",
"options": [
"ResourceQuota",
"LimitRange",
"PodLimit",
"ContainerPolicy"
],
"answer": "LimitRange"
},
{
"id": 49,
"question": "Docker command to create a bridge network?",
"options": [
"docker network create",
"docker create network",
"docker bridge create",
"docker network add"
],
"answer": "docker network create"
},
{
"id": 50,
"question": "Purpose of ReplicaSet?",
"options": [
"To delete pods",
"To duplicate pods",
"To build images",
"To create networks"
],
"answer": "To duplicate pods"
},
{
"id": 51,
"question": "Which is NOT a valid way to tag a Docker image?",
"options": [
"Tag by repository name",
"Tag by version",
"Tag by image ID",
"Tag using latest"
],
"answer": "Tag by image ID"
},
{
"id": 52,
"question": "Mission of control plane in Kubernetes?",
"options": [
"Regulate communication between Kubernetes clusters",
"Run application containers",
"Store container images",
"Monitor host hardware"
],
"answer": "Regulate communication between Kubernetes clusters"
},
{
"id": 53,
"question": "Service mode used to deploy a single task to each node?",
"options": [
"Replicated",
"Global",
"Node",
"Distributed"
],
"answer": "Global"
}, 
{
"id": 54,
"question": "After you initialize a new Git repository and create a file named git-quiz.html, which command will NOT work if issued?",
"options": [
"git add git-quiz.html",
"git status",
"git add .",
"git commit -m \"git quiz web file added\""
],
"answer": "git commit -m \"git quiz web file added\""
},
{
"id": 55,
"question": "Which of the following are the benefits of using Gradle over Maven?",
"options": [
"Gradle supports more languages than Maven",
"Gradle incorporates Maven features as well as additional functionality",
"Gradle builds are successful more often than Maven builds",
"A Gradle build is 1000 times faster than a Maven build"
],
"answer": "Gradle supports more languages than Maven, Gradle incorporates Maven features as well as additional functionality"
},
{
"id": 56,
"question": "Adopting Agile is necessary prior to embracing DevOps practices.",
"options": [
"True",
"False"
],
"answer": "False"
},
{
"id": 57,
"question": "What is continuous testing?",
"options": [
"Testing continuously for 24 hours",
"Manually testing each build, end-to-end",
"Automated testing",
"Automated testing on each continuous deployment"
],
"answer": "Automated testing on each continuous deployment"
},
{
"id": 58,
"question": "Adopting DevOps requires planning that spans which of the following?",
"options": [
"People",
"Efforts",
"Process",
"Tools/Technology"
],
"answer": "People, Process, Tools/Technology"
},
{
"id": 59,
"question": "Which DevOps principle focuses on product and service thinking?",
"options": [
"Customer-centric action",
"Continuous improvement",
"Create with the end in mind",
"Automate everything you can"
],
"answer": "Create with the end in mind"
},
{
"id": 60,
"question": "Shift-left concept refers to moving everything to the earlier phase in the ______ cycle.",
"options": [
"Requirement",
"Development",
"Design",
"Testing"
],
"answer": "Development"
},
{
"id": 61,
"question": "In DevOps, what is the main goal of version control?",
"options": [
"Ensure the ability to alert when configuration changes from the desired state",
"Ensure the ability to re-create the previous state of the test environment",
"Ensure the ability to re-create the production environment and build processes",
"Ensure the ability to share the source code between different developer teams"
],
"answer": "Ensure the ability to re-create the previous state of the test environment"
},
{
"id": 62,
"question": "What is a continuous build?",
"options": [
"A build that runs non-stop over and over again",
"A build that has not failed in 10 continuous attempts",
"A build executed every hour/day by a CI server",
"A build executed on every commit by a CI server"
],
"answer": "A build executed every hour/day by a CI server, A build executed on every commit by a CI server"
},
{
"id": 63,
"question": "DevOps is primarily about:",
"options": [
"Tools and their usage",
"Processes and adherence",
"Governance and audit processes",
"Tools, processes, and culture"
],
"answer": "Tools, processes, and culture"
},
{
"id": 64,
"question": "Which statement best describes the relationship between DevOps and Continuous Delivery?",
"options": [
"DevOps and Continuous Delivery are the same thing",
"DevOps and Continuous Delivery share a background in Agile methods and LEAN thinking",
"DevOps and Continuous Delivery share common processes",
"DevOps and Continuous Delivery are mutually exclusive"
],
"answer": "DevOps and Continuous Delivery share a background in Agile methods and LEAN thinking"
},
{
"id": 65,
"question": "How does a DevOps organization act when financing its work?",
"options": [
"It finances special projects to serve its clients",
"It finances products and services to serve its clients",
"It finances teams in matrix organizations",
"It finances development and operations teams separately"
],
"answer": "It finances products and services to serve its clients"
},
{
"id": 66,
"question": "In Kubernetes, a node is:",
"options": [
"A worker machine",
"A tool for starting a Kubernetes cluster on a local machine",
"A machine that coordinates scheduling and management of containers",
"A virtual machine"
],
"answer": "A worker machine"
},
{
"id": 67,
"question": "GIT can be integrated with Jenkins.",
"options": [
"True",
"False"
],
"answer": "True"
},
{
"id": 68,
"question": "POM in Maven stands for:",
"options": [
"Project Object Model",
"Process Object Model",
"Project Object Method",
"All of the above"
],
"answer": "Project Object Model"
},
{
"id": 69,
"question": "What is a widely used reusable asset to reinforce information security of DevOps deliverables?",
"options": [
"Data storage systems",
"Handling logging of sensitive client information",
"Data transfer between clients and software",
"All of the above"
],
"answer": "All of the above"
},
{
"id": 70,
"question": "DevOps is NOT a set of ______ steps.",
"options": [
"Development",
"Fixed",
"Testing",
"Design"
],
"answer": "Fixed"
},
{
"id": 71,
"question": "What is the sequence in which Maven looks for resources?",
"options": [
"Local → Remote → Maven Central",
"Remote → Maven Central → Local",
"Remote → Local → Maven Central",
"Maven Central → Local → Remote"
],
"answer": "Local → Remote → Maven Central"
},
{
"id": 72,
"question": "Why should production and development environments be similar?",
"options": [
"It is easier for the ops team",
"It improves testing accuracy and reduces deployment problems",
"People can fix defects directly in production",
"Development environments are cheaper"
],
"answer": "It improves testing accuracy and reduces deployment problems"
},
{
"id": 73,
"question": "DevOps can be implemented in any ______.",
"options": [
"Process",
"Environment",
"Defects",
"None of the above"
],
"answer": "Environment"
},
{
"id": 74,
"question": "What is continuous deployment?",
"options": [
"Deployment on every code push/commit",
"Deployment every hour/day",
"Local deployment on developer laptop",
"Deployment on IBM Cloud"
],
"answer": "Deployment on every code push/commit"
},
{
"id": 75,
"question": "In DevOps, one significant ROI area is:",
"options": [
"Zero defects",
"Faster time to value",
"Less feedback",
"Less customer experience"
],
"answer": "Faster time to value"
},
{
"id": 76,
"question": "How do you remove local untracked files and directories from the Git working tree?",
"options": [
"git clean -f",
"git delete -f",
"git remove -f -d",
"git add --all"
],
"answer": "git clean -f"
}

]