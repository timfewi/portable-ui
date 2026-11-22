{ inputs, pkgs, ... }:
let
  system = pkgs.stdenv.hostPlatform.system;
in
{
  devenv.latestVersion = "2.4.0";

  packages = [
    inputs.project-check.packages.${system}.project-check
    pkgs.bashInteractive
    pkgs.bun
    pkgs.coreutils
    pkgs.deadnix
    pkgs.git
    pkgs.husky
    pkgs.jq
    pkgs.just
    pkgs.nix
    pkgs.nixfmt
    pkgs.nodejs_24
    pkgs.python3
    pkgs.ripgrep
    pkgs.shfmt
    pkgs.statix
  ];
}
