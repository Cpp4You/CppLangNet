#include <iostream>
#include <vector>
#include <algorithm>

int main()
{
	auto numbers = std::vector{ 7, 5, 9, 1, 4 };
	// highlight-next-line
	std::ranges::sort(numbers);

	std::cout << "Sorted numbers: ";
	for(auto n : numbers)
		std::cout << n << " ";
}