<img src="static/logo.png" alt="chaos_logo" width="450"/>

[![Build Status](https://internal.pingcap.net/idc-jenkins/job/build_chaos_mesh_master/badge/icon)](https://internal.pingcap.net/idc-jenkins/view/chaos-mesh/job/build_chaos_mesh_master/)
[![codecov](https://codecov.io/gh/pingcap/chaos-mesh/branch/master/graph/badge.svg)](https://codecov.io/gh/pingcap/chaos-mesh)
[![LICENSE](https://img.shields.io/github/license/pingcap/chaos-mesh.svg)](https://github.com/pingcap/chaos-mesh/blob/master/LICENSE)
[![Language](https://img.shields.io/badge/Language-Go-blue.svg)](https://golang.org/)
[![Go Report Card](https://goreportcard.com/badge/github.com/pingcap/chaos-mesh)](https://goreportcard.com/report/github.com/pingcap/chaos-mesh)
[![GoDoc](https://img.shields.io/badge/Godoc-reference-blue.svg)](https://godoc.org/github.com/pingcap/chaos-mesh)

> **Note:**
>
> This readme and related documentation are Work in Progress.

Chaos Mesh is a cloud-native Chaos Engineering platform that orchestrates chaos on Kubernetes environments. At the current stage, it has the following components:

- **Chaos Operator**: the core component for chaos orchestration. Fully open sourced.
- **Chaos Dashboard**: a visualized panel that shows the impacts of chaos experiments on the online services of the system; under development; 
currently only supports chaos experiments on TiDB(https://github.com/pingcap/tidb).

See the following demo video for a quick view of Chaos Mesh:

[![Watch the video](./static/demo.gif)](https://www.youtube.com/watch?v=ifZEwdJO868)

## Chaos Operator

Chaos Operator injects chaos into the applications and Kubernetes infrastructure in a manageable way, which provides easy, 
custom definitions for chaos experiments and automatic orchestration. There are three components at play:

**Controller-manager**: used to schedule and manage the lifecycle of CRD objects

**Chaos-daemon**: runs as daemonset with privileged system permissions over network, Cgroup, etc. for a specific node

**Sidecar**: a special type of container that is dynamically injected into the target Pod by the webhook-server, which can be used for hijacking I/O of the application container.

![Chaos Operator](./static/chaos-mesh.svg)

Chaos Operator uses [Custom Resource Definition (CRD)](https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions/) to define chaos objects. 
The current implementation supports three types of CRD objects for fault injection, namely PodChaos, NetworkChaos, IOChaos, and TimeChaos, 
which correspond to the following major actions (experiments):

- pod-kill: The selected pod is killed (ReplicaSet or something similar may be needed to ensure the pod will be restarted).
- pod-failure: The selected pod will be unavailable in a specified period of time.
- container-kill: The selected container is killed in the selected pod.
- netem chaos: Network chaos such as delay, duplication, etc.
- network-partition: Simulate network partition.
- IO chaos: Simulate file system faults such as I/O delay, read/write errors, etc.
- time chaos: The selected pod will be injected clock skew.
- kernel chaos: The selected pod will be injected with (slab, bio, etc) errors.

## Quick start

* [Get Started on kind](https://chaos-mesh.org/docs/installation/get_started_on_kind)
* [Get Started on minikube](https://chaos-mesh.org/docs/installation/get_started_on_minikube)

## Deploy and use

See [Docs](https://chaos-mesh.org/docs/)

## FAQs

See [FAQs](https://chaos-mesh.org/docs/faqs).

## Blogs

- [Chaos Mesh - Your Chaos Engineering Solution for System Resiliency on Kubernetes](https://pingcap.com/blog/chaos-mesh-your-chaos-engineering-solution-for-system-resiliency-on-kubernetes/) 
- [Run Your First Chaos Experiment in 10 Minutes](https://pingcap.com/blog/run-first-chaos-experiment-in-ten-minutes/)
- [Simulating Clock Skew in K8s Without Affecting Other Containers on the Node](https://pingcap.com/blog/simulating-clock-skew-in-k8s-without-affecting-other-containers-on-node/)

## Contribute

See [Development Guide](https://chaos-mesh.org/docs/development_guides/development_overview).

## Community

Please reach out for bugs, feature requests, and other issues via:

- Following us on Twitter at [@chaos_mesh](https://twitter.com/chaos_mesh).
- The #sig-chaos-mesh channel in the [TiDB Community](https://pingcap.com/tidbslack) slack workspace.
- Filing an issue or opening a PR against this repo.

### Community meeting

On the fourth Thursday of every month (unless otherwise specified), the Chaos Mesh community holds a monthly meeting by video conference to discuss the status of Chaos Mesh.

**Quick links:**

- [Meeting notes](https://docs.google.com/document/d/1H8IfmhIJiJ1ltg-XLjqR_P_RaMHUGrl1CzvHnKM_9Sc/edit?usp=sharing)
- [Zoom meeting link](https://pingcap.zoom.com.cn/j/99421307560)

## Roadmap

See [ROADMAP](/ROADMAP.md)

## License

Chaos Mesh is licensed under the Apache License, Version 2.0. See [LICENSE](/LICENSE) for the full license text.

## Trademark

Chaos Mesh™ is a trademark of Beijing PingCap Xingchen Technology and Development Co., Ltd. © 2020 Beijing PingCap Xingchen Technology and Development Co., Ltd. All rights reserved.
