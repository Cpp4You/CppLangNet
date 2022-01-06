#include <iostream>
#include <vector>
#include <algorithm>

int main()
{
	namespace rg = std::ranges;

	auto numbers = std::vector{ 7, 5, 9, 1, 4 };
	// highlight-next-line
	rg::sort(numbers);

	std::cout << "Sorted numbers: ";
	for(auto n : numbers)
		std::cout << n << " ";
}