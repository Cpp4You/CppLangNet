#include <iostream>
#include <array>
#include <algorithm>

auto main() -> int {
  auto arr = std::array{ 3, 1, 2 };
  std::ranges::sort(arr);
  for (auto elem : arr) {
    std::cout << elem << ' ';
  }
}