#version 300 es

precision lowp float;

uniform sampler2D uniTexture;
uniform vec3 uniSpot;
in vec2 varUV;
in vec3 varNormal;
in float varAlpha;

out vec4 FragColor;

const mat3 ROTATE = mat3(
    -0.8090169943749473, 0.5877852522924732, 0,
    -0.5877852522924732, -0.8090169943749473, 0,
    0, 0, 1
);

void main() {
    vec3 pos = gl_FragCoord.xyz;
    vec3 ray = normalize(uniSpot - pos);
    vec3 ray2 = normalize(uniSpot - ROTATE * pos);
    vec3 ray3 = normalize(uniSpot - ROTATE * ROTATE * pos);
    vec3 normal = normalize(varNormal);
    vec3 bounce = normalize(reflect(ray, normal));
    vec3 bounce2 = normalize(reflect(ray2, normal));
    vec3 bounce3 = normalize(reflect(ray3, normal));
    float light = 1.0;
    light *= 3.0 * pow(normal.z, 5.0);
    float specular = pow(max(0.0, bounce.z), 150.0) * .35;
    specular += pow(max(0.0, bounce2.z), 10.0) * 0.25;
    specular += pow(max(0.0, bounce3.z), 50.0) * 0.5;
    FragColor = vec4(
        texture(uniTexture, varUV).rgb * light
        + specular * vec3(.839, .925, .392),
        varAlpha
    );
}