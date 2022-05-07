#include <iostream>
#include <fstream>
#include <string>
#include <filesystem>
#include <array>

namespace fs = std::filesystem;

std::string readFile(fs::path const& path)
{
	std::array<char, 16 * 1024> buffer;
	std::string result;

	std::ifstream file(path, std::ios::binary);
	if (file.is_open())
	{
		while (file.read(buffer.data(), buffer.size()))
			result.append(buffer.data(), file.gcount());
		result.append(buffer.data(), file.gcount());
	}

	return result;
}

int main() {
	std::cout << readFile("source.cpp");
}