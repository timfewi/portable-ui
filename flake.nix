{
  description = "Project Nix formatter";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/d5cc6833999746cffdfe0598f7bc801a57b887a9";

  outputs =
    { nixpkgs, ... }:
    let
      systems = [
        "x86_64-linux"
        "aarch64-linux"
      ];
      forAllSystems = nixpkgs.lib.genAttrs systems;
    in
    {
      formatter = forAllSystems (system: nixpkgs.legacyPackages.${system}.nixfmt-tree);
    };
}
