{ pkgs, ... }:

{ 
  # The list of packages to be made available in the environment
  packages = with pkgs; [ 
    nodejs_18
    yarn
  ]; 
}