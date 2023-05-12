#version 300 es

precision lowp float;

uniform float uniLight;
uniform mat4 uniTransform;
in vec3 attPos;
in vec2 attUV;
out vec2 varUV;
out vec3 varNormal;
out float varAlpha;

void main() {
    varUV = attUV;
    varAlpha = 1.0 - smoothstep(0.9, 1.0, attPos.z);
    varNormal = mat3(uniTransform) * normalize(vec3(0, 0.33333, 1.0 - attPos.z));
    gl_Position = uniTransform * vec4(attPos, 1.0);
    float light = uniLight;
    gl_Position.x *= light;
    gl_Position.y *= light;
}