This project aim at building a simple application that Accept an HTTP GET request at /hello and respond with “world” and also Accept a HTTP POST request at /vowel-service and return the message with the vowels reversed.  The payload will be JSON with a “message” key. Only the "message" key of the JSON should be processed

#Technologies
* Nodejs & Express.js
* Docker
* Terraform
* Helm
* Kubernetes
* Google Cloud Platform :
    1. cloudbuild
    2. cloudrun
    3. GKE
    4. google managed-cert

Steps
* cloud & infrastructure
    1. Write a Dockerfile that will properly turn my          application into a container
    2. Configure Cloudbuild such that i can use a single gcloud command to run my build.
    3. Publish my Docker image to Google Container Registry
    4. Used Terraform to set up GKE in my GCP project using the documentation as my guide.
    5. Used Cloudbuild to deploy my application to GKE 
    6. Deploy a custom domain + TLS on your application
    7. Create monitoring (using helm for grafana & prometheus)

## Install Prometheus and Grafana using Helm
* This Helm chart installs the following in your cluster:
    1. kube-state-metrics (gathers metrics from cluster resources)
    2. Prometheus Node Exporter (gathers metrics from Kubernetes nodes)
    3. Grafana
    4. Grafana dashboards and Prometheus rules for Kubernetes monitoring

## To install it, first add the Prometheus Community Helm repo and run this command below 
    1. helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
    2. helm repo update
    3. kubectl create namespace monitoring
    4. helm install prometheus --namespace monitoring prometheus-community/kube-prometheus-stack
    5. $ kubectl get secret -n monitoring prometheus-grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo
    6. $ kubectl port-forward -n monitoring service/prometheus-grafana 3000:80


