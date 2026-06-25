.logo {
  display: block;
}

.shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 60%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent 0%,
    rgba(255, 255, 255, 0.45) 50%,
    transparent 100%
  );
  animation: shine 3s ease-in-out infinite;
  pointer-events: none;
}

@keyframes shine {
  0%   { left: -100%; }
  40%  { left: 150%; }
  100% { left: 150%; }
}