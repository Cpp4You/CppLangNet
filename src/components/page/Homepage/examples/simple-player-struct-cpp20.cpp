// prism-push-types:Player
#include <iostream>
#include <format>

struct Player {
  std::string name;
  float max_health = 50;
  float health = 50;

  auto level_up() -> void {
    max_health += 20;
    health += 20;
  }
};

auto display(Player const& p) -> void {
  std::cout << std::format("{}\n- hp: {:.1f}/{:.1f}", p.name, p.health, p.max_health);
}

auto main() -> int {
  auto p = Player();
  p.name = "Bezi";
  for (int i = 0; i < 3; ++i)
    p.level_up();

  display(p);
}