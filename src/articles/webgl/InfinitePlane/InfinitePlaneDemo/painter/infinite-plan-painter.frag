#version 300 es

precision mediump float;

in vec3 varRay;
out vec4 FragColor;
uniform vec3 uniCameraPosition;

void main() {
    if (varRay.z >= 0.0) discard;

    float factor = -uniCameraPosition.z / varRay.z;
    float x = uniCameraPosition.x + factor * varRay.x;
    float y = uniCameraPosition.y + factor * varRay.y;
    float a = smoothstep(-.001, .001, cos(x) * cos(y));
    vec3 color = mix(vec3(0.2, 1, 0), vec3(.5, .7, .2), a);
    float dist = distance(uniCameraPosition, vec3(x, y, 0));
    float b = clamp(25.0 / dist, 0.0, 1.0);
    FragColor = vec4(mix(vec3(0.3, 0.5 , 1), color, b) , 1.0);
}