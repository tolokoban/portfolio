#version 300 es

uniform float uniPointSize;
in vec2 attPos;
in vec4 attColor;

out vec4 varColor;

void main() {
    varColor = attColor;
    gl_Position = vec4(attPos, 0.5, 1.0);
    gl_PointSize = uniPointSize;
}