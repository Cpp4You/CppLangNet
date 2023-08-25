#include <iostream>
#include <string_view>
#include <ranges>

auto main() -> int {
  auto text = std::string_view("How I wish I could recollect pi easily today!");

  auto reversed_words = text
    | std::views::reverse
    | std::views::split(' ')
    | std::views::transform(std::views::reverse)
    | std::views::join_with(' ');

  for (auto w : reversed_words)
    std::cout << w;
}