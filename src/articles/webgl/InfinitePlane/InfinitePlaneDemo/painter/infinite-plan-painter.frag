#version 300 es

precision mediump float;

uniform vec3 uniCameraPosition;
uniform samplerCube uniSkybox;

in vec3 varRay;
out vec4 FragColor;

void main() {
    if (varRay.z >= 0.0) {
        FragColor = texture(uniSkybox, normalize(varRay.xzy));
    } else {
        float factor = -uniCameraPosition.z / varRay.z;
        float x = uniCameraPosition.x + factor * varRay.x;
        float y = uniCameraPosition.y + factor * varRay.y;
        float a = smoothstep(-.001, .001, cos(x) * cos(y));
        vec3 color = mix(vec3(0.2, 1, 0), vec3(.5, .7, .2), a);
        float dist = distance(uniCameraPosition, vec3(x, y, 0));
        float b = clamp(25.0 / dist, 0.0, 1.0);
        FragColor = vec4(mix(vec3(0.84, 0.85 , 0.83), color, b) , 1.0);
    }
}