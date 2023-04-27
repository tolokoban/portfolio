#version 300 es

in vec2 attPoint;
in vec2 attUV;
out vec2 varUV;

void main() {
    varUV = attUV;
    gl_Position = vec4(attPoint, 0.0, 1.0);
}
