#version 300 es

uniform mat3 uniCameraOrientation;
in vec2 attRay;
out vec3 varRay;

void main() {
    varRay = uniCameraOrientation * vec3(1.0, attRay);
    gl_Position = vec4(attRay, 0.0, 1.0);
}