#version 300 es

precision mediump float;

in vec4 varColor;

out vec4 FragColor;

void main() {
    vec2 pos = 2.0 * gl_PointCoord.xy - vec2(1, 1);
    float r = length(pos);
    if (r > 1.0) discard;

    float light = 1.0 - smoothstep(0.9, 1.0, r);
    FragColor = varColor * light;
}