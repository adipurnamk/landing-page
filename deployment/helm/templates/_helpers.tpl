{{- define "landing-page.fullname" -}}
{{- if .Values.fullnameOverride }}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" -}}
{{- else }}
{{- $name := default .Chart.Name .Values.nameOverride -}}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" -}}
{{- end }}
{{- end }}

{{- define "landing-page.name" -}}
{{- default .Chart.Name .Values.nameOverride -}}
{{- end }}

{{- define "landing-page.labels" -}}
helm.sh/chart: "{{ .Chart.Name }}-{{ .Chart.Version | replace "+" "_" }}"
app.kubernetes.io/name: "{{ include "landing-page.name" . }}"
app.kubernetes.io/instance: "{{ .Release.Name }}"
app.kubernetes.io/version: "{{ .Chart.AppVersion }}"
app.kubernetes.io/managed-by: "{{ .Release.Service }}"
{{- end }}

{{- define "landing-page.selectorLabels" -}}
app.kubernetes.io/name: "{{ include "landing-page.name" . }}"
app.kubernetes.io/instance: "{{ .Release.Name }}"
{{- end }}
