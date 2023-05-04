#version 300 es

precision mediump float;

in vec3 varRay;
out vec4 FragColor;
const vec3 cameraPosition = vec3(0, 0, 1);

void main() {
    if (varRay.z >= 0.0) discard;

    float factor = -1.0 / varRay.z;
    float x = cameraPosition.x + factor * varRay.x;
    float y = cameraPosition.y + factor * varRay.y;
    float r = cos(x) * cos(y);
    FragColor = vec4(r > 0.0 ? vec3(0.2, .8, 0) : vec3(.3, .6, .1) , 1.0);
}