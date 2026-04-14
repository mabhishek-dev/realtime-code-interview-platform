export const PROBLEMS = {
  //Arrays and Hashing
  "contains-duplicate": {
    id: "contains-duplicate",
    title: "Contains Duplicate",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [1,2,3,1]",
        output: "true",
      },
      {
        input: "nums = [1,2,3,4]",
        output: "false",
      },
      {
        input: "nums = [1,1,1,3,3,4,3,2,4,2]",
        output: "true",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁹ ≤ nums[i] ≤ 10⁹"],
    starterCode: {
      javascript: `function containsDuplicate(nums) {
  // Write your solution here

}

// Test cases
console.log(containsDuplicate([1,2,3,1])); // Expected: true
console.log(containsDuplicate([1,2,3,4])); // Expected: false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // Expected: true`,
      python: `def containsDuplicate(nums):
    # Write your solution here
    pass

# Test cases
print(containsDuplicate([1,2,3,1]))  # Expected: True
print(containsDuplicate([1,2,3,4]))  # Expected: False
print(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))  # Expected: True`,
      java: `import java.util.*;

class Solution {
    public static boolean containsDuplicate(int[] nums) {
        // Write your solution here

        return false;
    }

    public static void main(String[] args) {
        System.out.println(containsDuplicate(new int[]{1,2,3,1})); // Expected: true
        System.out.println(containsDuplicate(new int[]{1,2,3,4})); // Expected: false
        System.out.println(containsDuplicate(new int[]{1,1,1,3,3,4,3,2,4,2})); // Expected: true
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

bool containsDuplicate(vector<int>& nums) {
    // Write your solution here
    return false;
}

int main() {
    vector<int> v1 = {1,2,3,1};
    vector<int> v2 = {1,2,3,4};
    vector<int> v3 = {1,1,1,3,3,4,3,2,4,2};

    cout << boolalpha;
    cout << containsDuplicate(v1) << endl;
    cout << containsDuplicate(v2) << endl;
    cout << containsDuplicate(v3) << endl;
}`,
      csharp: `using System;

class Solution {
    public static bool ContainsDuplicate(int[] nums) {
        // Write your solution here
        return false;
    }

    static void Main() {
        Console.WriteLine(ContainsDuplicate(new int[]{1,2,3,1}));
        Console.WriteLine(ContainsDuplicate(new int[]{1,2,3,4}));
        Console.WriteLine(ContainsDuplicate(new int[]{1,1,1,3,3,4,3,2,4,2}));
    }
}`,
      c: `#include <stdio.h>

int containsDuplicate(int nums[], int n) {
    // Write your solution here
    return 0;
}

int main() {
    int a1[] = {1,2,3,1};
    int a2[] = {1,2,3,4};
    int a3[] = {1,1,1,3,3,4,3,2,4,2};

    printf("%s\n", containsDuplicate(a1, 4) ? "true" : "false");
    printf("%s\n", containsDuplicate(a2, 4) ? "true" : "false");
    printf("%s\n", containsDuplicate(a3, 10) ? "true" : "false");

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
      cpp: "true\nfalse\ntrue",
      csharp: "true\nfalse\ntrue",
      c: "true\nfalse\ntrue",
    },
  },
  "valid-anagram": {
    id: "valid-anagram",
    title: "Valid Anagram",
    difficulty: "Easy",
    category: "String • Hash Table • Sorting",
    description: {
      text: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
      notes: [],
    },
    examples: [
      {
        input: 's = "anagram", t = "nagaram"',
        output: "true",
      },
      {
        input: 's = "rat", t = "car"',
        output: "false",
      },
    ],
    constraints: [
      "1 ≤ s.length, t.length ≤ 5 * 10⁴",
      "s and t consist of lowercase English letters",
    ],
    starterCode: {
      javascript: `function isAnagram(s, t) {
  // Write your solution here

}

// Test cases
console.log(isAnagram("anagram", "nagaram")); // Expected: true
console.log(isAnagram("rat", "car")); // Expected: false`,
      python: `def isAnagram(s, t):
    # Write your solution here
    pass

# Test cases
print(isAnagram("anagram", "nagaram"))  # Expected: True
print(isAnagram("rat", "car"))  # Expected: False`,
      java: `class Solution {
    public static boolean isAnagram(String s, String t) {
        // Write your solution here

        return false;
    }

    public static void main(String[] args) {
        System.out.println(isAnagram("anagram", "nagaram")); // Expected: true
        System.out.println(isAnagram("rat", "car")); // Expected: false
    }
}`,
      cpp: `#include <iostream>
#include <string>
using namespace std;

bool isAnagram(string s, string t) {
    // Write your solution here
    return false;
}

int main() {
    cout << boolalpha;
    cout << isAnagram("anagram", "nagaram") << endl;
    cout << isAnagram("rat", "car") << endl;
}`,
      csharp: `using System;

class Solution {
    public static bool IsAnagram(string s, string t) {
        // Write your solution here
        return false;
    }

    static void Main() {
        Console.WriteLine(IsAnagram("anagram", "nagaram"));
        Console.WriteLine(IsAnagram("rat", "car"));
    }
}`,
      c: `#include <stdio.h>
#include <string.h>

int isAnagram(char s[], char t[]) {
    // Write your solution here
    return 0;
}

int main() {
    printf("%s\n", isAnagram("anagram", "nagaram") ? "true" : "false");
    printf("%s\n", isAnagram("rat", "car") ? "true" : "false");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
      cpp: "true\nfalse",
      csharp: "true\nfalse",
      c: "true\nfalse",
    },
  },
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here

}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here

        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    // Write your solution here
    return {};
}

int main() {
    vector<int> v1 = {2,7,11,15};
    vector<int> v2 = {3,2,4};
    vector<int> v3 = {3,3};

    vector<int> r1 = twoSum(v1, 9);
    vector<int> r2 = twoSum(v2, 6);
    vector<int> r3 = twoSum(v3, 6);

    cout << r1[0] << " " << r1[1] << endl;
    cout << r2[0] << " " << r2[1] << endl;
    cout << r3[0] << " " << r3[1] << endl;
}`,
      csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static int[] TwoSum(int[] nums, int target) {
        // Write your solution here
        return new int[0];
    }

    static void Main() {
        var r1 = TwoSum(new int[]{2,7,11,15},9);
        var r2 = TwoSum(new int[]{3,2,4},6);
        var r3 = TwoSum(new int[]{3,3},6);

        Console.WriteLine($"{r1[0]} {r1[1]}");
        Console.WriteLine($"{r2[0]} {r2[1]}");
        Console.WriteLine($"{r3[0]} {r3[1]}");
    }
}`,
      c: `#include <stdio.h>

void twoSum(int nums[], int n, int target) {
    // Write your solution here
}

int main() {
    int a1[] = {2,7,11,15};
    int a2[] = {3,2,4};
    int a3[] = {3,3};

    twoSum(a1, 4, 9);
    twoSum(a2, 3, 6);
    twoSum(a3, 2, 6);

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
      cpp: "0 1\n1 2\n0 1",
      csharp: "0 1\n1 2\n0 1",
      c: "0 1\n1 2\n0 1",
    },
  },
  "group-anagrams": {
    id: "group-anagrams",
    title: "Group Anagrams",
    difficulty: "Medium",
    category: "Array • Hash Table • String • Sorting",
    description: {
      text: "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
      notes: [],
    },
    examples: [
      {
        input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
        output: '[["bat"],["nat","tan"],["ate","eat","tea"]]',
      },
      {
        input: 'strs = [""]',
        output: '[[""]]',
      },
      {
        input: 'strs = ["a"]',
        output: '[["a"]]',
      },
    ],
    constraints: [
      "1 ≤ strs.length ≤ 10⁴",
      "0 ≤ strs[i].length ≤ 100",
      "strs[i] consists of lowercase English letters",
    ],
    starterCode: {
      javascript: `function groupAnagrams(strs) {
  // Write your solution here

}

// Test cases
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));`,
      python: `def groupAnagrams(strs):
    # Write your solution here
    pass

# Test cases
print(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
print(groupAnagrams([""]))
print(groupAnagrams(["a"]))`,
      java: `import java.util.*;

class Solution {
    public static List<List<String>> groupAnagrams(String[] strs) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(groupAnagrams(new String[]{"eat","tea","tan","ate","nat","bat"}));
        System.out.println(groupAnagrams(new String[]{""}));
        System.out.println(groupAnagrams(new String[]{"a"}));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

vector<vector<string>> groupAnagrams(vector<string>& strs) {
    // Write your solution here
    return {};
}

int main() {
    vector<string> v1 = {"eat","tea","tan","ate","nat","bat"};
    vector<string> v2 = {""};
    vector<string> v3 = {"a"};

    auto r1 = groupAnagrams(v1);
    auto r2 = groupAnagrams(v2);
    auto r3 = groupAnagrams(v3);

    // Simple print
    for (auto &group : r1) {
        cout << "[";
        for (auto &s : group) cout << s << " ";
        cout << "]";
    }
    cout << endl;

    for (auto &group : r2) {
        cout << "[";
        for (auto &s : group) cout << s << " ";
        cout << "]";
    }
    cout << endl;

    for (auto &group : r3) {
        cout << "[";
        for (auto &s : group) cout << s << " ";
        cout << "]";
    }
    cout << endl;
}`,
      csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static IList<IList<string>> GroupAnagrams(string[] strs) {
        // Write your solution here
        return new List<IList<string>>();
    }

    static void Main() {
        Console.WriteLine(GroupAnagrams(new string[]{"eat","tea","tan","ate","nat","bat"}));
        Console.WriteLine(GroupAnagrams(new string[]{""}));
        Console.WriteLine(GroupAnagrams(new string[]{"a"}));
    }
}`,
      c: `#include <stdio.h>

void groupAnagrams(char* strs[], int n) {
    // Write your solution here
}

int main() {
    char* a1[] = {"eat","tea","tan","ate","nat","bat"};
    char* a2[] = {""};
    char* a3[] = {"a"};

    groupAnagrams(a1, 6);
    groupAnagrams(a2, 1);
    groupAnagrams(a3, 1);

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "Any order of grouped anagrams",
      python: "Any order of grouped anagrams",
      java: "Any order of grouped anagrams",
      cpp: "Any order of grouped anagrams",
      csharp: "Any order of grouped anagrams",
      c: "Any order of grouped anagrams",
    },
  },
  "top-k-frequent-elements": {
    id: "top-k-frequent-elements",
    title: "Top K Frequent Elements",
    difficulty: "Medium",
    category: "Array • Hash Table • Heap",
    description: {
      text: "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",
      notes: ["It is guaranteed that the answer is unique."],
    },
    examples: [
      {
        input: "nums = [1,1,1,2,2,3], k = 2",
        output: "[1,2]",
      },
      {
        input: "nums = [1], k = 1",
        output: "[1]",
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 10⁵",
      "-10⁴ ≤ nums[i] ≤ 10⁴",
      "k is in the range [1, the number of unique elements in the array]",
    ],
    starterCode: {
      javascript: `function topKFrequent(nums, k) {
  // Write your solution here

}

// Test cases
console.log(topKFrequent([1,1,1,2,2,3], 2)); // Expected: [1,2]
console.log(topKFrequent([1], 1)); // Expected: [1]`,
      python: `def topKFrequent(nums, k):
    # Write your solution here
    pass

# Test cases
print(topKFrequent([1,1,1,2,2,3], 2))  # Expected: [1,2]
print(topKFrequent([1], 1))  # Expected: [1]`,
      java: `import java.util.*;

class Solution {
    public static int[] topKFrequent(int[] nums, int k) {
        // Write your solution here
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(topKFrequent(new int[]{1,1,1,2,2,3}, 2))); // Expected: [1,2]
        System.out.println(Arrays.toString(topKFrequent(new int[]{1}, 1))); // Expected: [1]
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> topKFrequent(vector<int>& nums, int k) {
    // Write your solution here
    return {};
}

int main() {
    vector<int> v1 = {1,1,1,2,2,3};
    vector<int> v2 = {1};

    auto r1 = topKFrequent(v1, 2);
    auto r2 = topKFrequent(v2, 1);

    for (int x : r1) cout << x << " ";
    cout << endl;

    for (int x : r2) cout << x << " ";
    cout << endl;
}`,
      csharp: `using System;

class Solution {
    public static int[] TopKFrequent(int[] nums, int k) {
        // Write your solution here
        return new int[0];
    }

    static void Main() {
        var r1 = TopKFrequent(new int[]{1,1,1,2,2,3}, 2);
        var r2 = TopKFrequent(new int[]{1}, 1);

        Console.WriteLine(string.Join(" ", r1));
        Console.WriteLine(string.Join(" ", r2));
    }
}`,
      c: `#include <stdio.h>

void topKFrequent(int nums[], int n, int k) {
    // Write your solution here
}

int main() {
    int a1[] = {1,1,1,2,2,3};
    int a2[] = {1};

    topKFrequent(a1, 6, 2);
    topKFrequent(a2, 1, 1);

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[1,2]\n[1]",
      python: "[1,2]\n[1]",
      java: "[1, 2]\n[1]",
      cpp: "1 2\n1",
      csharp: "1 2\n1",
      c: "1 2\n1",
    },
  },
  "encode-and-decode-strings": {
    id: "encode-and-decode-strings",
    title: "Encode and Decode Strings",
    difficulty: "Medium",
    category: "Array • String • Design",
    description: {
      text: "Design an algorithm to encode a list of strings to a string and decode it back to the original list of strings.",
      notes: [
        "The encoded string should be able to be decoded back to the original list of strings.",
        "Implement encode and decode methods.",
      ],
    },
    examples: [
      {
        input: '["lint","code","love","you"]',
        output: '["lint","code","love","you"]',
      },
      {
        input: '["we","say",":","yes"]',
        output: '["we","say",":","yes"]',
      },
    ],
    constraints: [
      "1 ≤ strs.length ≤ 200",
      "0 ≤ strs[i].length ≤ 200",
      "strs[i] consists of any possible characters",
    ],
    starterCode: {
      javascript: `class Codec {
  encode(strs) {
    // Write your solution here
  }

  decode(s) {
    // Write your solution here
  }
}

// Test cases
const codec = new Codec();
const encoded = codec.encode(["lint","code","love","you"]);
console.log(codec.decode(encoded));

const encoded2 = codec.encode(["we","say",":","yes"]);
console.log(codec.decode(encoded2));`,
      python: `class Codec:
    def encode(self, strs):
        # Write your solution here
        pass

    def decode(self, s):
        # Write your solution here
        pass

# Test cases
codec = Codec()
encoded = codec.encode(["lint","code","love","you"])
print(codec.decode(encoded))

encoded2 = codec.encode(["we","say",":","yes"])
print(codec.decode(encoded2))`,
      java: `import java.util.*;

class Codec {
    public String encode(List<String> strs) {
        // Write your solution here
        return "";
    }

    public List<String> decode(String s) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        Codec codec = new Codec();
        String encoded = codec.encode(Arrays.asList("lint","code","love","you"));
        System.out.println(codec.decode(encoded));

        String encoded2 = codec.encode(Arrays.asList("we","say",":","yes"));
        System.out.println(codec.decode(encoded2));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

class Codec {
public:
    string encode(vector<string>& strs) {
        // Write your solution here
        return "";
    }

    vector<string> decode(string s) {
        // Write your solution here
        return {};
    }
};

int main() {
    Codec codec;

    vector<string> v1 = {"lint","code","love","you"};
    string encoded = codec.encode(v1);
    vector<string> decoded = codec.decode(encoded);

    for (auto &s : decoded) cout << s << " ";
    cout << endl;

    vector<string> v2 = {"we","say",":","yes"};
    string encoded2 = codec.encode(v2);
    vector<string> decoded2 = codec.decode(encoded2);

    for (auto &s : decoded2) cout << s << " ";
    cout << endl;
}`,
      csharp: `using System;
using System.Collections.Generic;

class Codec {
    public string Encode(IList<string> strs) {
        // Write your solution here
        return "";
    }

    public IList<string> Decode(string s) {
        // Write your solution here
        return new List<string>();
    }

    static void Main() {
        Codec codec = new Codec();

        var encoded = codec.Encode(new List<string>{"lint","code","love","you"});
        var decoded = codec.Decode(encoded);
        Console.WriteLine(string.Join(" ", decoded));

        var encoded2 = codec.Encode(new List<string>{"we","say",":","yes"});
        var decoded2 = codec.Decode(encoded2);
        Console.WriteLine(string.Join(" ", decoded2));
    }
}`,
      c: `#include <stdio.h>

void encode(char* strs[], int n, char* result) {
    // Write your solution here
}

void decode(char* s) {
    // Write your solution here
}

int main() {
    char* a1[] = {"lint","code","love","you"};
    char encoded[1000];
    encode(a1, 4, encoded);
    decode(encoded);

    char* a2[] = {"we","say",":","yes"};
    char encoded2[1000];
    encode(a2, 4, encoded2);
    decode(encoded2);

    return 0;
}`,
    },
    expectedOutput: {
      javascript: '["lint","code","love","you"]\n["we","say",":","yes"]',
      python: "['lint', 'code', 'love', 'you']\n['we', 'say', ':', 'yes']",
      java: "[lint, code, love, you]\n[we, say, :, yes]",
      cpp: "lint code love you\nwe say : yes",
      csharp: "lint code love you\nwe say : yes",
      c: "lint code love you\nwe say : yes",
    },
  },
  "product-of-array-except-self": {
    id: "product-of-array-except-self",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    category: "Array • Prefix Sum",
    description: {
      text: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
      notes: [
        "The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.",
        "You must write an algorithm that runs in O(n) time and without using the division operation.",
      ],
    },
    examples: [
      {
        input: "nums = [1,2,3,4]",
        output: "[24,12,8,6]",
      },
      {
        input: "nums = [-1,1,0,-3,3]",
        output: "[0,0,9,0,0]",
      },
    ],
    constraints: ["2 ≤ nums.length ≤ 10⁵", "-30 ≤ nums[i] ≤ 30"],
    starterCode: {
      javascript: `function productExceptSelf(nums) {
  // Write your solution here

}

// Test cases
console.log(productExceptSelf([1,2,3,4])); // Expected: [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])); // Expected: [0,0,9,0,0]`,
      python: `def productExceptSelf(nums):
    # Write your solution here
    pass

# Test cases
print(productExceptSelf([1,2,3,4]))  # Expected: [24,12,8,6]
print(productExceptSelf([-1,1,0,-3,3]))  # Expected: [0,0,9,0,0]`,
      java: `import java.util.*;

class Solution {
    public static int[] productExceptSelf(int[] nums) {
        // Write your solution here

        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(productExceptSelf(new int[]{1,2,3,4}))); // Expected: [24,12,8,6]
        System.out.println(Arrays.toString(productExceptSelf(new int[]{-1,1,0,-3,3}))); // Expected: [0,0,9,0,0]
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> productExceptSelf(vector<int>& nums) {
    // Write your solution here
    return {};
}

int main() {
    vector<int> v1 = {1,2,3,4};
    vector<int> v2 = {-1,1,0,-3,3};

    auto r1 = productExceptSelf(v1);
    auto r2 = productExceptSelf(v2);

    for (int x : r1) cout << x << " ";
    cout << endl;

    for (int x : r2) cout << x << " ";
    cout << endl;
}`,
      csharp: `using System;

class Solution {
    public static int[] ProductExceptSelf(int[] nums) {
        // Write your solution here
        return new int[0];
    }

    static void Main() {
        var r1 = ProductExceptSelf(new int[]{1,2,3,4});
        var r2 = ProductExceptSelf(new int[]{-1,1,0,-3,3});

        Console.WriteLine(string.Join(" ", r1));
        Console.WriteLine(string.Join(" ", r2));
    }
}`,
      c: `#include <stdio.h>

void productExceptSelf(int nums[], int n) {
    // Write your solution here
}

int main() {
    int a1[] = {1,2,3,4};
    int a2[] = {-1,1,0,-3,3};

    productExceptSelf(a1, 4);
    productExceptSelf(a2, 5);

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[24,12,8,6]\n[0,0,9,0,0]",
      python: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]",
      java: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]",
      cpp: "24 12 8 6\n0 0 9 0 0",
      csharp: "24 12 8 6\n0 0 9 0 0",
      c: "24 12 8 6\n0 0 9 0 0",
    },
  },
  "valid-sudoku": {
    id: "valid-sudoku",
    title: "Valid Sudoku",
    difficulty: "Medium",
    category: "Array • Hash Table • Matrix",
    description: {
      text: "Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules.",
      notes: [
        "Each row must contain the digits 1-9 without repetition.",
        "Each column must contain the digits 1-9 without repetition.",
        "Each of the nine 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.",
        "A Sudoku board (partially filled) could be valid but is not necessarily solvable.",
      ],
    },
    examples: [
      {
        input:
          'board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]',
        output: "true",
      },
      {
        input:
          'board = [["8","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]',
        output: "false",
      },
    ],
    constraints: [
      "board.length == 9",
      "board[i].length == 9",
      "board[i][j] is a digit 1-9 or '.'",
    ],
    starterCode: {
      javascript: `function isValidSudoku(board) {
  // Write your solution here

}

// Test cases
console.log(isValidSudoku([
["5","3",".",".","7",".",".",".","."],
["6",".",".","1","9","5",".",".","."],
[".","9","8",".",".",".",".","6","."],
["8",".",".",".","6",".",".",".","3"],
["4",".",".","8",".","3",".",".","1"],
["7",".",".",".","2",".",".",".","6"],
[".","6",".",".",".",".","2","8","."],
[".",".",".","4","1","9",".",".","5"],
[".",".",".",".","8",".",".","7","9"]
])); // Expected: true

console.log(isValidSudoku([
["8","3",".",".","7",".",".",".","."],
["6",".",".","1","9","5",".",".","."],
[".","9","8",".",".",".",".","6","."],
["8",".",".",".","6",".",".",".","3"],
["4",".",".","8",".","3",".",".","1"],
["7",".",".",".","2",".",".",".","6"],
[".","6",".",".",".",".","2","8","."],
[".",".",".","4","1","9",".",".","5"],
[".",".",".",".","8",".",".","7","9"]
])); // Expected: false`,
      python: `def isValidSudoku(board):
    # Write your solution here
    pass

# Test cases
print(isValidSudoku([
["5","3",".",".","7",".",".",".","."],
["6",".",".","1","9","5",".",".","."],
[".","9","8",".",".",".",".","6","."],
["8",".",".",".","6",".",".",".","3"],
["4",".",".","8",".","3",".",".","1"],
["7",".",".",".","2",".",".",".","6"],
[".","6",".",".",".",".","2","8","."],
[".",".",".","4","1","9",".",".","5"],
[".",".",".",".","8",".",".","7","9"]
]))  # Expected: True

print(isValidSudoku([
["8","3",".",".","7",".",".",".","."],
["6",".",".","1","9","5",".",".","."],
[".","9","8",".",".",".",".","6","."],
["8",".",".",".","6",".",".",".","3"],
["4",".",".","8",".","3",".",".","1"],
["7",".",".",".","2",".",".",".","6"],
[".","6",".",".",".",".","2","8","."],
[".",".",".","4","1","9",".",".","5"],
[".",".",".",".","8",".",".","7","9"]
]))  # Expected: False`,
      java: `import java.util.*;

class Solution {
    public static boolean isValidSudoku(char[][] board) {
        // Write your solution here

        return false;
    }

    public static void main(String[] args) {
        char[][] board1 = {
            {'5','3','.','.','7','.','.','.','.'},
            {'6','.','.','1','9','5','.','.','.'},
            {'.','9','8','.','.','.','.','6','.'},
            {'8','.','.','.','6','.','.','.','3'},
            {'4','.','.','8','.','3','.','.','1'},
            {'7','.','.','.','2','.','.','.','6'},
            {'.','6','.','.','.','.','2','8','.'},
            {'.','.','.','4','1','9','.','.','5'},
            {'.','.','.','.','8','.','.','7','9'}
        };

        char[][] board2 = {
            {'8','3','.','.','7','.','.','.','.'},
            {'6','.','.','1','9','5','.','.','.'},
            {'.','9','8','.','.','.','.','6','.'},
            {'8','.','.','.','6','.','.','.','3'},
            {'4','.','.','8','.','3','.','.','1'},
            {'7','.','.','.','2','.','.','.','6'},
            {'.','6','.','.','.','.','2','8','.'},
            {'.','.','.','4','1','9','.','.','5'},
            {'.','.','.','.','8','.','.','7','9'}
        };

        System.out.println(isValidSudoku(board1)); // Expected: true
        System.out.println(isValidSudoku(board2)); // Expected: false
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

bool isValidSudoku(vector<vector<char>>& board) {
    // Write your solution here
    return false;
}

int main() {
    vector<vector<char>> board1 = {
        {'5','3','.','.','7','.','.','.','.'},
        {'6','.','.','1','9','5','.','.','.'},
        {'.','9','8','.','.','.','.','6','.'},
        {'8','.','.','.','6','.','.','.','3'},
        {'4','.','.','8','.','3','.','.','1'},
        {'7','.','.','.','2','.','.','.','6'},
        {'.','6','.','.','.','.','2','8','.'},
        {'.','.','.','4','1','9','.','.','5'},
        {'.','.','.','.','8','.','.','7','9'}
    };

    vector<vector<char>> board2 = {
        {'8','3','.','.','7','.','.','.','.'},
        {'6','.','.','1','9','5','.','.','.'},
        {'.','9','8','.','.','.','.','6','.'},
        {'8','.','.','.','6','.','.','.','3'},
        {'4','.','.','8','.','3','.','.','1'},
        {'7','.','.','.','2','.','.','.','6'},
        {'.','6','.','.','.','.','2','8','.'},
        {'.','.','.','4','1','9','.','.','5'},
        {'.','.','.','.','8','.','.','7','9'}
    };

    cout << boolalpha;
    cout << isValidSudoku(board1) << endl;
    cout << isValidSudoku(board2) << endl;
}`,
      csharp: `using System;

class Solution {
    public static bool IsValidSudoku(char[][] board) {
        // Write your solution here
        return false;
    }

    static void Main() {
        char[][] board1 = {
            new char[]{'5','3','.','.','7','.','.','.','.'},
            new char[]{'6','.','.','1','9','5','.','.','.'},
            new char[]{'.','9','8','.','.','.','.','6','.'},
            new char[]{'8','.','.','.','6','.','.','.','3'},
            new char[]{'4','.','.','8','.','3','.','.','1'},
            new char[]{'7','.','.','.','2','.','.','.','6'},
            new char[]{'.','6','.','.','.','.','2','8','.'},
            new char[]{'.','.','.','4','1','9','.','.','5'},
            new char[]{'.','.','.','.','8','.','.','7','9'}
        };

        char[][] board2 = {
            new char[]{'8','3','.','.','7','.','.','.','.'},
            new char[]{'6','.','.','1','9','5','.','.','.'},
            new char[]{'.','9','8','.','.','.','.','6','.'},
            new char[]{'8','.','.','.','6','.','.','.','3'},
            new char[]{'4','.','.','8','.','3','.','.','1'},
            new char[]{'7','.','.','.','2','.','.','.','6'},
            new char[]{'.','6','.','.','.','.','2','8','.'},
            new char[]{'.','.','.','4','1','9','.','.','5'},
            new char[]{'.','.','.','.','8','.','.','7','9'}
        };

        Console.WriteLine(IsValidSudoku(board1));
        Console.WriteLine(IsValidSudoku(board2));
    }
}`,
      c: `#include <stdio.h>

int isValidSudoku(char board[9][9]) {
    // Write your solution here
    return 0;
}

int main() {
    char board1[9][9] = {
        {'5','3','.','.','7','.','.','.','.'},
        {'6','.','.','1','9','5','.','.','.'},
        {'.','9','8','.','.','.','.','6','.'},
        {'8','.','.','.','6','.','.','.','3'},
        {'4','.','.','8','.','3','.','.','1'},
        {'7','.','.','.','2','.','.','.','6'},
        {'.','6','.','.','.','.','2','8','.'},
        {'.','.','.','4','1','9','.','.','5'},
        {'.','.','.','.','8','.','.','7','9'}
    };

    char board2[9][9] = {
        {'8','3','.','.','7','.','.','.','.'},
        {'6','.','.','1','9','5','.','.','.'},
        {'.','9','8','.','.','.','.','6','.'},
        {'8','.','.','.','6','.','.','.','3'},
        {'4','.','.','8','.','3','.','.','1'},
        {'7','.','.','.','2','.','.','.','6'},
        {'.','6','.','.','.','.','2','8','.'},
        {'.','.','.','4','1','9','.','.','5'},
        {'.','.','.','.','8','.','.','7','9'}
    };

    printf("%s\n", isValidSudoku(board1) ? "true" : "false");
    printf("%s\n", isValidSudoku(board2) ? "true" : "false");

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
      cpp: "true\nfalse",
      csharp: "true\nfalse",
      c: "true\nfalse",
    },
  },
  "longest-consecutive-sequence": {
    id: "longest-consecutive-sequence",
    title: "Longest Consecutive Sequence",
    difficulty: "Medium",
    category: "Array • Hash Table",
    description: {
      text: "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.",
      notes: ["You must write an algorithm that runs in O(n) time."],
    },
    examples: [
      {
        input: "nums = [100,4,200,1,3,2]",
        output: "4",
        explanation:
          "The longest consecutive elements sequence is [1,2,3,4]. Therefore its length is 4.",
      },
      {
        input: "nums = [0,3,7,2,5,8,4,6,0,1]",
        output: "9",
      },
    ],
    constraints: ["0 ≤ nums.length ≤ 10⁵", "-10⁹ ≤ nums[i] ≤ 10⁹"],
    starterCode: {
      javascript: `function longestConsecutive(nums) {
  // Write your solution here

}

// Test cases
console.log(longestConsecutive([100,4,200,1,3,2])); // Expected: 4
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])); // Expected: 9`,
      python: `def longestConsecutive(nums):
    # Write your solution here
    pass

# Test cases
print(longestConsecutive([100,4,200,1,3,2]))  # Expected: 4
print(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))  # Expected: 9`,
      java: `import java.util.*;

class Solution {
    public static int longestConsecutive(int[] nums) {
        // Write your solution here

        return 0;
    }

    public static void main(String[] args) {
        System.out.println(longestConsecutive(new int[]{100,4,200,1,3,2})); // Expected: 4
        System.out.println(longestConsecutive(new int[]{0,3,7,2,5,8,4,6,0,1})); // Expected: 9
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int longestConsecutive(vector<int>& nums) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> v1 = {100,4,200,1,3,2};
    vector<int> v2 = {0,3,7,2,5,8,4,6,0,1};

    cout << longestConsecutive(v1) << endl;
    cout << longestConsecutive(v2) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int LongestConsecutive(int[] nums) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(LongestConsecutive(new int[]{100,4,200,1,3,2}));
        Console.WriteLine(LongestConsecutive(new int[]{0,3,7,2,5,8,4,6,0,1}));
    }
}`,
      c: `#include <stdio.h>

int longestConsecutive(int nums[], int n) {
    // Write your solution here
    return 0;
}

int main() {
    int a1[] = {100,4,200,1,3,2};
    int a2[] = {0,3,7,2,5,8,4,6,0,1};

    printf("%d\n", longestConsecutive(a1, 6));
    printf("%d\n", longestConsecutive(a2, 10));

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "4\n9",
      python: "4\n9",
      java: "4\n9",
      cpp: "4\n9",
      csharp: "4\n9",
      c: "4\n9",
    },
  },

  //Two Pointers
  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: [
        "Given a string s, return true if it is a palindrome, or false otherwise.",
      ],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],
    constraints: [
      "1 ≤ s.length ≤ 2 * 10⁵",
      "s consists only of printable ASCII characters",
    ],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here

}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here

        return false;
    }

    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
      cpp: `#include <iostream>
#include <string>
using namespace std;

bool isPalindrome(string s) {
    // Write your solution here
    return false;
}

int main() {
    cout << boolalpha;
    cout << isPalindrome("A man, a plan, a canal: Panama") << endl;
    cout << isPalindrome("race a car") << endl;
    cout << isPalindrome(" ") << endl;
}`,
      csharp: `using System;

class Solution {
    public static bool IsPalindrome(string s) {
        // Write your solution here
        return false;
    }

    static void Main() {
        Console.WriteLine(IsPalindrome("A man, a plan, a canal: Panama"));
        Console.WriteLine(IsPalindrome("race a car"));
        Console.WriteLine(IsPalindrome(" "));
    }
}`,
      c: `#include <stdio.h>
#include <string.h>
#include <ctype.h>

int isPalindrome(char s[]) {
    // Write your solution here
    return 0;
}

int main() {
    printf("%s\n", isPalindrome("A man, a plan, a canal: Panama") ? "true" : "false");
    printf("%s\n", isPalindrome("race a car") ? "true" : "false");
    printf("%s\n", isPalindrome(" ") ? "true" : "false");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
      cpp: "true\nfalse\ntrue",
      csharp: "true\nfalse\ntrue",
      c: "true\nfalse\ntrue",
    },
  },
  "two-sum-ii-input-array-is-sorted": {
    id: "two-sum-ii-input-array-is-sorted",
    title: "Two Sum II - Input Array Is Sorted",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.",
      notes: [
        "Return the indices of the two numbers (1-indexed) as an integer array [index1, index2].",
        "You may assume that each input would have exactly one solution and you may not use the same element twice.",
        "Your solution must use only constant extra space.",
      ],
    },
    examples: [
      {
        input: "numbers = [2,7,11,15], target = 9",
        output: "[1,2]",
        explanation:
          "The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.",
      },
      {
        input: "numbers = [2,3,4], target = 6",
        output: "[1,3]",
      },
      {
        input: "numbers = [-1,0], target = -1",
        output: "[1,2]",
      },
    ],
    constraints: [
      "2 ≤ numbers.length ≤ 3 * 10⁴",
      "-1000 ≤ numbers[i] ≤ 1000",
      "numbers is sorted in non-decreasing order",
      "-1000 ≤ target ≤ 1000",
      "Exactly one solution exists",
    ],
    starterCode: {
      javascript: `function twoSum(numbers, target) {
  // Write your solution here

}

// Test cases
console.log(twoSum([2,7,11,15], 9)); // Expected: [1,2]
console.log(twoSum([2,3,4], 6)); // Expected: [1,3]
console.log(twoSum([-1,0], -1)); // Expected: [1,2]`,
      python: `def twoSum(numbers, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2,7,11,15], 9))  # Expected: [1,2]
print(twoSum([2,3,4], 6))  # Expected: [1,3]
print(twoSum([-1,0], -1))  # Expected: [1,2]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] numbers, int target) {
        // Write your solution here

        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2,7,11,15}, 9))); // Expected: [1,2]
        System.out.println(Arrays.toString(twoSum(new int[]{2,3,4}, 6))); // Expected: [1,3]
        System.out.println(Arrays.toString(twoSum(new int[]{-1,0}, -1))); // Expected: [1,2]
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> twoSum(vector<int>& numbers, int target) {
    // Write your solution here
    return {};
}

int main() {
    vector<int> v1 = {2,7,11,15};
    vector<int> v2 = {2,3,4};
    vector<int> v3 = {-1,0};

    auto r1 = twoSum(v1, 9);
    auto r2 = twoSum(v2, 6);
    auto r3 = twoSum(v3, -1);

    cout << r1[0] << " " << r1[1] << endl;
    cout << r2[0] << " " << r2[1] << endl;
    cout << r3[0] << " " << r3[1] << endl;
}`,
      csharp: `using System;

class Solution {
    public static int[] TwoSum(int[] numbers, int target) {
        // Write your solution here
        return new int[0];
    }

    static void Main() {
        var r1 = TwoSum(new int[]{2,7,11,15}, 9);
        var r2 = TwoSum(new int[]{2,3,4}, 6);
        var r3 = TwoSum(new int[]{-1,0}, -1);

        Console.WriteLine($"{r1[0]} {r1[1]}");
        Console.WriteLine($"{r2[0]} {r2[1]}");
        Console.WriteLine($"{r3[0]} {r3[1]}");
    }
}`,
      c: `#include <stdio.h>

void twoSum(int numbers[], int n, int target) {
    // Write your solution here
}

int main() {
    int a1[] = {2,7,11,15};
    int a2[] = {2,3,4};
    int a3[] = {-1,0};

    twoSum(a1, 4, 9);
    twoSum(a2, 3, 6);
    twoSum(a3, 2, -1);

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[1,2]\n[1,3]\n[1,2]",
      python: "[1,2]\n[1,3]\n[1,2]",
      java: "[1, 2]\n[1, 3]\n[1, 2]",
      cpp: "1 2\n1 3\n1 2",
      csharp: "1 2\n1 3\n1 2",
      c: "1 2\n1 3\n1 2",
    },
  },
  "3sum": {
    id: "3sum",
    title: "3Sum",
    difficulty: "Medium",
    category: "Array • Two Pointers • Sorting",
    description: {
      text: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
      notes: ["The solution set must not contain duplicate triplets."],
    },
    examples: [
      {
        input: "nums = [-1,0,1,2,-1,-4]",
        output: "[[-1,-1,2],[-1,0,1]]",
      },
      {
        input: "nums = [0,1,1]",
        output: "[]",
      },
      {
        input: "nums = [0,0,0]",
        output: "[[0,0,0]]",
      },
    ],
    constraints: ["3 ≤ nums.length ≤ 3000", "-10⁵ ≤ nums[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function threeSum(nums) {
  // Write your solution here

}

// Test cases
console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([0,1,1]));
console.log(threeSum([0,0,0]));`,
      python: `def threeSum(nums):
    # Write your solution here
    pass

# Test cases
print(threeSum([-1,0,1,2,-1,-4]))
print(threeSum([0,1,1]))
print(threeSum([0,0,0]))`,
      java: `import java.util.*;

class Solution {
    public static List<List<Integer>> threeSum(int[] nums) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(threeSum(new int[]{-1,0,1,2,-1,-4}));
        System.out.println(threeSum(new int[]{0,1,1}));
        System.out.println(threeSum(new int[]{0,0,0}));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> threeSum(vector<int>& nums) {
    // Write your solution here
    return {};
}

int main() {
    vector<int> v1 = {-1,0,1,2,-1,-4};
    vector<int> v2 = {0,1,1};
    vector<int> v3 = {0,0,0};

    auto r1 = threeSum(v1);
    auto r2 = threeSum(v2);
    auto r3 = threeSum(v3);

    // Simple print
    for (auto &group : r1) {
        cout << "[";
        for (auto &x : group) cout << x << " ";
        cout << "]";
    }
    cout << endl;

    for (auto &group : r2) {
        cout << "[";
        for (auto &x : group) cout << x << " ";
        cout << "]";
    }
    cout << endl;

    for (auto &group : r3) {
        cout << "[";
        for (auto &x : group) cout << x << " ";
        cout << "]";
    }
    cout << endl;
}`,
      csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static IList<IList<int>> ThreeSum(int[] nums) {
        // Write your solution here
        return new List<IList<int>>();
    }

    static void Main() {
        Console.WriteLine(ThreeSum(new int[]{-1,0,1,2,-1,-4}));
        Console.WriteLine(ThreeSum(new int[]{0,1,1}));
        Console.WriteLine(ThreeSum(new int[]{0,0,0}));
    }
}`,
      c: `#include <stdio.h>

void threeSum(int nums[], int n) {
    // Write your solution here
}

int main() {
    int a1[] = {-1,0,1,2,-1,-4};
    int a2[] = {0,1,1};
    int a3[] = {0,0,0};

    threeSum(a1, 6);
    threeSum(a2, 3);
    threeSum(a3, 3);

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[[-1,-1,2],[-1,0,1]]\n[]\n[[0,0,0]]",
      python: "[[-1, -1, 2], [-1, 0, 1]]\n[]\n[[0, 0, 0]]",
      java: "[[-1, -1, 2], [-1, 0, 1]]\n[]\n[[0, 0, 0]]",
      cpp: "Any order of valid triplets",
      csharp: "Any order of valid triplets",
      c: "Any order of valid triplets",
    },
  },
  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here

}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here

        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int maxArea(vector<int>& height) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> v1 = {1,8,6,2,5,4,8,3,7};
    vector<int> v2 = {1,1};

    cout << maxArea(v1) << endl;
    cout << maxArea(v2) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int MaxArea(int[] height) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(MaxArea(new int[]{1,8,6,2,5,4,8,3,7}));
        Console.WriteLine(MaxArea(new int[]{1,1}));
    }
}`,
      c: `#include <stdio.h>

int maxArea(int height[], int n) {
    // Write your solution here
    return 0;
}

int main() {
    int a1[] = {1,8,6,2,5,4,8,3,7};
    int a2[] = {1,1};

    printf("%d\n", maxArea(a1, 9));
    printf("%d\n", maxArea(a2, 2));

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
      cpp: "49\n1",
      csharp: "49\n1",
      c: "49\n1",
    },
  },
  "trapping-rain-water": {
    id: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    category: "Array • Two Pointers • Dynamic Programming • Stack",
    description: {
      text: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
      notes: [],
    },
    examples: [
      {
        input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        output: "6",
        explanation: "The above elevation map can trap 6 units of rain water.",
      },
      {
        input: "height = [4,2,0,3,2,5]",
        output: "9",
      },
    ],
    constraints: ["1 ≤ height.length ≤ 2 * 10⁴", "0 ≤ height[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function trap(height) {
  // Write your solution here

}

// Test cases
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Expected: 6
console.log(trap([4,2,0,3,2,5])); // Expected: 9`,
      python: `def trap(height):
    # Write your solution here
    pass

# Test cases
print(trap([0,1,0,2,1,0,1,3,2,1,2,1]))  # Expected: 6
print(trap([4,2,0,3,2,5]))  # Expected: 9`,
      java: `class Solution {
    public static int trap(int[] height) {
        // Write your solution here

        return 0;
    }

    public static void main(String[] args) {
        System.out.println(trap(new int[]{0,1,0,2,1,0,1,3,2,1,2,1})); // Expected: 6
        System.out.println(trap(new int[]{4,2,0,3,2,5})); // Expected: 9
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int trap(vector<int>& height) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> v1 = {0,1,0,2,1,0,1,3,2,1,2,1};
    vector<int> v2 = {4,2,0,3,2,5};

    cout << trap(v1) << endl;
    cout << trap(v2) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int Trap(int[] height) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(Trap(new int[]{0,1,0,2,1,0,1,3,2,1,2,1}));
        Console.WriteLine(Trap(new int[]{4,2,0,3,2,5}));
    }
}`,
      c: `#include <stdio.h>

int trap(int height[], int n) {
    // Write your solution here
    return 0;
}

int main() {
    int a1[] = {0,1,0,2,1,0,1,3,2,1,2,1};
    int a2[] = {4,2,0,3,2,5};

    printf("%d\n", trap(a1, 12));
    printf("%d\n", trap(a2, 6));

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "6\n9",
      python: "6\n9",
      java: "6\n9",
      cpp: "6\n9",
      csharp: "6\n9",
      c: "6\n9",
    },
  },

  //Sliding Window
  "best-time-to-buy-and-sell-stock": {
    id: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Array • Dynamic Programming",
    description: {
      text: "You are given an array prices where prices[i] is the price of a given stock on the ith day.",
      notes: [
        "You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
        "Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.",
      ],
    },
    examples: [
      {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
        explanation:
          "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.",
      },
      {
        input: "prices = [7,6,4,3,1]",
        output: "0",
        explanation:
          "In this case, no transactions are done and the max profit = 0.",
      },
    ],
    constraints: ["1 ≤ prices.length ≤ 10⁵", "0 ≤ prices[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxProfit(prices) {
  // Write your solution here

}

// Test cases
console.log(maxProfit([7,1,5,3,6,4])); // Expected: 5
console.log(maxProfit([7,6,4,3,1])); // Expected: 0`,
      python: `def maxProfit(prices):
    # Write your solution here
    pass

# Test cases
print(maxProfit([7,1,5,3,6,4]))  # Expected: 5
print(maxProfit([7,6,4,3,1]))  # Expected: 0`,
      java: `class Solution {
    public static int maxProfit(int[] prices) {
        // Write your solution here

        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxProfit(new int[]{7,1,5,3,6,4})); // Expected: 5
        System.out.println(maxProfit(new int[]{7,6,4,3,1})); // Expected: 0
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int maxProfit(vector<int>& prices) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> v1 = {7,1,5,3,6,4};
    vector<int> v2 = {7,6,4,3,1};

    cout << maxProfit(v1) << endl;
    cout << maxProfit(v2) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int MaxProfit(int[] prices) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(MaxProfit(new int[]{7,1,5,3,6,4}));
        Console.WriteLine(MaxProfit(new int[]{7,6,4,3,1}));
    }
}`,
      c: `#include <stdio.h>

int maxProfit(int prices[], int n) {
    // Write your solution here
    return 0;
}

int main() {
    int a1[] = {7,1,5,3,6,4};
    int a2[] = {7,6,4,3,1};

    printf("%d\n", maxProfit(a1, 6));
    printf("%d\n", maxProfit(a2, 5));

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "5\n0",
      python: "5\n0",
      java: "5\n0",
      cpp: "5\n0",
      csharp: "5\n0",
      c: "5\n0",
    },
  },
  "longest-substring-without-repeating-characters": {
    id: "longest-substring-without-repeating-characters",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "String • Sliding Window • Hash Table",
    description: {
      text: "Given a string s, find the length of the longest substring without repeating characters.",
      notes: [],
    },
    examples: [
      {
        input: 's = "abcabcbb"',
        output: "3",
        explanation: 'The answer is "abc", with the length of 3.',
      },
      {
        input: 's = "bbbbb"',
        output: "1",
        explanation: 'The answer is "b", with the length of 1.',
      },
      {
        input: 's = "pwwkew"',
        output: "3",
        explanation: 'The answer is "wke", with the length of 3.',
      },
    ],
    constraints: [
      "0 ≤ s.length ≤ 5 * 10⁴",
      "s consists of English letters, digits, symbols and spaces",
    ],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {
  // Write your solution here

}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Expected: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Expected: 3`,
      python: `def lengthOfLongestSubstring(s):
    # Write your solution here
    pass

# Test cases
print(lengthOfLongestSubstring("abcabcbb"))  # Expected: 3
print(lengthOfLongestSubstring("bbbbb"))  # Expected: 1
print(lengthOfLongestSubstring("pwwkew"))  # Expected: 3`,
      java: `class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // Write your solution here

        return 0;
    }

    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
        System.out.println(lengthOfLongestSubstring("bbbbb")); // Expected: 1
        System.out.println(lengthOfLongestSubstring("pwwkew")); // Expected: 3
    }
}`,
      cpp: `#include <iostream>
#include <string>
using namespace std;

int lengthOfLongestSubstring(string s) {
    // Write your solution here
    return 0;
}

int main() {
    cout << lengthOfLongestSubstring("abcabcbb") << endl;
    cout << lengthOfLongestSubstring("bbbbb") << endl;
    cout << lengthOfLongestSubstring("pwwkew") << endl;
}`,
      csharp: `using System;

class Solution {
    public static int LengthOfLongestSubstring(string s) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(LengthOfLongestSubstring("abcabcbb"));
        Console.WriteLine(LengthOfLongestSubstring("bbbbb"));
        Console.WriteLine(LengthOfLongestSubstring("pwwkew"));
    }
}`,
      c: `#include <stdio.h>
#include <string.h>

int lengthOfLongestSubstring(char s[]) {
    // Write your solution here
    return 0;
}

int main() {
    printf("%d\n", lengthOfLongestSubstring("abcabcbb"));
    printf("%d\n", lengthOfLongestSubstring("bbbbb"));
    printf("%d\n", lengthOfLongestSubstring("pwwkew"));

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "3\n1\n3",
      python: "3\n1\n3",
      java: "3\n1\n3",
      cpp: "3\n1\n3",
      csharp: "3\n1\n3",
      c: "3\n1\n3",
    },
  },
  "longest-repeating-character-replacement": {
    id: "longest-repeating-character-replacement",
    title: "Longest Repeating Character Replacement",
    difficulty: "Medium",
    category: "String • Sliding Window • Hash Table",
    description: {
      text: "You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character.",
      notes: [
        "You can perform this operation at most k times.",
        "Return the length of the longest substring containing the same letter you can get after performing the above operations.",
      ],
    },
    examples: [
      {
        input: 's = "ABAB", k = 2',
        output: "4",
        explanation: "Replace the two 'A's with two 'B's or vice versa.",
      },
      {
        input: 's = "AABABBA", k = 1',
        output: "4",
        explanation:
          "Replace the one 'A' in the middle with 'B' to get \"AABBBBA\". The substring \"BBBB\" has the longest repeating characters.",
      },
    ],
    constraints: [
      "1 ≤ s.length ≤ 10⁵",
      "s consists of only uppercase English letters",
      "0 ≤ k ≤ s.length",
    ],
    starterCode: {
      javascript: `function characterReplacement(s, k) {
  // Write your solution here

}

// Test cases
console.log(characterReplacement("ABAB", 2)); // Expected: 4
console.log(characterReplacement("AABABBA", 1)); // Expected: 4`,
      python: `def characterReplacement(s, k):
    # Write your solution here
    pass

# Test cases
print(characterReplacement("ABAB", 2))  # Expected: 4
print(characterReplacement("AABABBA", 1))  # Expected: 4`,
      java: `class Solution {
    public static int characterReplacement(String s, int k) {
        // Write your solution here

        return 0;
    }

    public static void main(String[] args) {
        System.out.println(characterReplacement("ABAB", 2)); // Expected: 4
        System.out.println(characterReplacement("AABABBA", 1)); // Expected: 4
    }
}`,
      cpp: `#include <iostream>
#include <string>
using namespace std;

int characterReplacement(string s, int k) {
    // Write your solution here
    return 0;
}

int main() {
    cout << characterReplacement("ABAB", 2) << endl;
    cout << characterReplacement("AABABBA", 1) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int CharacterReplacement(string s, int k) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(CharacterReplacement("ABAB", 2));
        Console.WriteLine(CharacterReplacement("AABABBA", 1));
    }
}`,
      c: `#include <stdio.h>
#include <string.h>

int characterReplacement(char s[], int k) {
    // Write your solution here
    return 0;
}

int main() {
    printf("%d\n", characterReplacement("ABAB", 2));
    printf("%d\n", characterReplacement("AABABBA", 1));

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "4\n4",
      python: "4\n4",
      java: "4\n4",
      cpp: "4\n4",
      csharp: "4\n4",
      c: "4\n4",
    },
  },
  "permutation-in-string": {
    id: "permutation-in-string",
    title: "Permutation in String",
    difficulty: "Medium",
    category: "String • Sliding Window • Hash Table",
    description: {
      text: "Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.",
      notes: [
        "In other words, return true if one of s1's permutations is the substring of s2.",
      ],
    },
    examples: [
      {
        input: 's1 = "ab", s2 = "eidbaooo"',
        output: "true",
        explanation: 's2 contains one permutation of s1 ("ba").',
      },
      {
        input: 's1 = "ab", s2 = "eidboaoo"',
        output: "false",
      },
    ],
    constraints: [
      "1 ≤ s1.length, s2.length ≤ 10⁴",
      "s1 and s2 consist of lowercase English letters",
    ],
    starterCode: {
      javascript: `function checkInclusion(s1, s2) {
  // Write your solution here

}

// Test cases
console.log(checkInclusion("ab", "eidbaooo")); // Expected: true
console.log(checkInclusion("ab", "eidboaoo")); // Expected: false`,
      python: `def checkInclusion(s1, s2):
    # Write your solution here
    pass

# Test cases
print(checkInclusion("ab", "eidbaooo"))  # Expected: True
print(checkInclusion("ab", "eidboaoo"))  # Expected: False`,
      java: `class Solution {
    public static boolean checkInclusion(String s1, String s2) {
        // Write your solution here

        return false;
    }

    public static void main(String[] args) {
        System.out.println(checkInclusion("ab", "eidbaooo")); // Expected: true
        System.out.println(checkInclusion("ab", "eidboaoo")); // Expected: false
    }
}`,
      cpp: `#include <iostream>
#include <string>
using namespace std;

bool checkInclusion(string s1, string s2) {
    // Write your solution here
    return false;
}

int main() {
    cout << boolalpha;
    cout << checkInclusion("ab", "eidbaooo") << endl;
    cout << checkInclusion("ab", "eidboaoo") << endl;
}`,
      csharp: `using System;

class Solution {
    public static bool CheckInclusion(string s1, string s2) {
        // Write your solution here
        return false;
    }

    static void Main() {
        Console.WriteLine(CheckInclusion("ab", "eidbaooo"));
        Console.WriteLine(CheckInclusion("ab", "eidboaoo"));
    }
}`,
      c: `#include <stdio.h>
#include <string.h>

int checkInclusion(char s1[], char s2[]) {
    // Write your solution here
    return 0;
}

int main() {
    printf("%s\n", checkInclusion("ab", "eidbaooo") ? "true" : "false");
    printf("%s\n", checkInclusion("ab", "eidboaoo") ? "true" : "false");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
      cpp: "true\nfalse",
      csharp: "true\nfalse",
      c: "true\nfalse",
    },
  },
  "minimum-window-substring": {
    id: "minimum-window-substring",
    title: "Minimum Window Substring",
    difficulty: "Hard",
    category: "String • Sliding Window • Hash Table",
    description: {
      text: "Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window.",
      notes: [
        'If there is no such substring, return an empty string "".',
        "The testcases will be generated such that the answer is unique.",
      ],
    },
    examples: [
      {
        input: 's = "ADOBECODEBANC", t = "ABC"',
        output: '"BANC"',
        explanation:
          "The minimum window substring \"BANC\" includes 'A', 'B', and 'C' from string t.",
      },
      {
        input: 's = "a", t = "a"',
        output: '"a"',
      },
      {
        input: 's = "a", t = "aa"',
        output: '""',
      },
    ],
    constraints: [
      "m == s.length",
      "n == t.length",
      "1 ≤ m, n ≤ 10⁵",
      "s and t consist of uppercase and lowercase English letters",
    ],
    starterCode: {
      javascript: `function minWindow(s, t) {
  // Write your solution here

}

// Test cases
console.log(minWindow("ADOBECODEBANC", "ABC")); // Expected: "BANC"
console.log(minWindow("a", "a")); // Expected: "a"
console.log(minWindow("a", "aa")); // Expected: ""`,
      python: `def minWindow(s, t):
    # Write your solution here
    pass

# Test cases
print(minWindow("ADOBECODEBANC", "ABC"))  # Expected: "BANC"
print(minWindow("a", "a"))  # Expected: "a"
print(minWindow("a", "aa"))  # Expected: ""`,
      java: `class Solution {
    public static String minWindow(String s, String t) {
        // Write your solution here

        return "";
    }

    public static void main(String[] args) {
        System.out.println(minWindow("ADOBECODEBANC", "ABC")); // Expected: "BANC"
        System.out.println(minWindow("a", "a")); // Expected: "a"
        System.out.println(minWindow("a", "aa")); // Expected: ""
    }
}`,
      cpp: `#include <iostream>
#include <string>
using namespace std;

string minWindow(string s, string t) {
    // Write your solution here
    return "";
}

int main() {
    cout << minWindow("ADOBECODEBANC", "ABC") << endl;
    cout << minWindow("a", "a") << endl;
    cout << minWindow("a", "aa") << endl;
}`,
      csharp: `using System;

class Solution {
    public static string MinWindow(string s, string t) {
        // Write your solution here
        return "";
    }

    static void Main() {
        Console.WriteLine(MinWindow("ADOBECODEBANC", "ABC"));
        Console.WriteLine(MinWindow("a", "a"));
        Console.WriteLine(MinWindow("a", "aa"));
    }
}`,
      c: `#include <stdio.h>
#include <string.h>

void minWindow(char s[], char t[]) {
    // Write your solution here
}

int main() {
    minWindow("ADOBECODEBANC", "ABC");
    minWindow("a", "a");
    minWindow("a", "aa");

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "BANC\na\n",
      python: "BANC\na\n",
      java: "BANC\na\n",
      cpp: "BANC\na\n",
      csharp: "BANC\na\n",
      c: "BANC\na\n",
    },
  },
  "sliding-window-maximum": {
    id: "sliding-window-maximum",
    title: "Sliding Window Maximum",
    difficulty: "Hard",
    category: "Array • Sliding Window • Deque • Heap",
    description: {
      text: "You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right.",
      notes: [
        "You can only see the k numbers in the window.",
        "Each time the sliding window moves right by one position.",
        "Return the max sliding window.",
      ],
    },
    examples: [
      {
        input: "nums = [1,3,-1,-3,5,3,6,7], k = 3",
        output: "[3,3,5,5,6,7]",
      },
      {
        input: "nums = [1], k = 1",
        output: "[1]",
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 10⁵",
      "-10⁴ ≤ nums[i] ≤ 10⁴",
      "1 ≤ k ≤ nums.length",
    ],
    starterCode: {
      javascript: `function maxSlidingWindow(nums, k) {
  // Write your solution here

}

// Test cases
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)); // Expected: [3,3,5,5,6,7]
console.log(maxSlidingWindow([1], 1)); // Expected: [1]`,
      python: `def maxSlidingWindow(nums, k):
    # Write your solution here
    pass

# Test cases
print(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))  # Expected: [3,3,5,5,6,7]
print(maxSlidingWindow([1], 1))  # Expected: [1]`,
      java: `import java.util.*;

class Solution {
    public static int[] maxSlidingWindow(int[] nums, int k) {
        // Write your solution here

        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(maxSlidingWindow(new int[]{1,3,-1,-3,5,3,6,7}, 3))); // Expected: [3,3,5,5,6,7]
        System.out.println(Arrays.toString(maxSlidingWindow(new int[]{1}, 1))); // Expected: [1]
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> maxSlidingWindow(vector<int>& nums, int k) {
    // Write your solution here
    return {};
}

int main() {
    vector<int> v1 = {1,3,-1,-3,5,3,6,7};
    vector<int> v2 = {1};

    auto r1 = maxSlidingWindow(v1, 3);
    auto r2 = maxSlidingWindow(v2, 1);

    for (int x : r1) cout << x << " ";
    cout << endl;

    for (int x : r2) cout << x << " ";
    cout << endl;
}`,
      csharp: `using System;

class Solution {
    public static int[] MaxSlidingWindow(int[] nums, int k) {
        // Write your solution here
        return new int[0];
    }

    static void Main() {
        var r1 = MaxSlidingWindow(new int[]{1,3,-1,-3,5,3,6,7}, 3);
        var r2 = MaxSlidingWindow(new int[]{1}, 1);

        Console.WriteLine(string.Join(" ", r1));
        Console.WriteLine(string.Join(" ", r2));
    }
}`,
      c: `#include <stdio.h>

void maxSlidingWindow(int nums[], int n, int k) {
    // Write your solution here
}

int main() {
    int a1[] = {1,3,-1,-3,5,3,6,7};
    int a2[] = {1};

    maxSlidingWindow(a1, 8, 3);
    maxSlidingWindow(a2, 1, 1);

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[3,3,5,5,6,7]\n[1]",
      python: "[3,3,5,5,6,7]\n[1]",
      java: "[3, 3, 5, 5, 6, 7]\n[1]",
      cpp: "3 3 5 5 6 7\n1",
      csharp: "3 3 5 5 6 7\n1",
      c: "3 3 5 5 6 7\n1",
    },
  },

  //Stack
  "valid-parentheses": {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "String • Stack",
    description: {
      text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      notes: [
        "An input string is valid if open brackets are closed by the same type of brackets.",
        "Open brackets must be closed in the correct order.",
        "Every close bracket has a corresponding open bracket of the same type.",
      ],
    },
    examples: [
      {
        input: 's = "()"',
        output: "true",
      },
      {
        input: 's = "()[]{}"',
        output: "true",
      },
      {
        input: 's = "(]"',
        output: "false",
      },
    ],
    constraints: [
      "1 ≤ s.length ≤ 10⁴",
      "s consists of parentheses only '()[]{}'.",
    ],
    starterCode: {
      javascript: `function isValid(s) {
  // Write your solution here

}

// Test cases
console.log(isValid("()")); // Expected: true
console.log(isValid("()[]{}")); // Expected: true
console.log(isValid("(]")); // Expected: false`,
      python: `def isValid(s):
    # Write your solution here
    pass

# Test cases
print(isValid("()"))  # Expected: True
print(isValid("()[]{}"))  # Expected: True
print(isValid("(]"))  # Expected: False`,
      java: `class Solution {
    public static boolean isValid(String s) {
        // Write your solution here

        return false;
    }

    public static void main(String[] args) {
        System.out.println(isValid("()")); // Expected: true
        System.out.println(isValid("()[]{}")); // Expected: true
        System.out.println(isValid("(]")); // Expected: false
    }
}`,
      cpp: `#include <iostream>
#include <string>
using namespace std;

bool isValid(string s) {
    // Write your solution here
    return false;
}

int main() {
    cout << boolalpha;
    cout << isValid("()") << endl;
    cout << isValid("()[]{}") << endl;
    cout << isValid("(]") << endl;
}`,
      csharp: `using System;

class Solution {
    public static bool IsValid(string s) {
        // Write your solution here
        return false;
    }

    static void Main() {
        Console.WriteLine(IsValid("()"));
        Console.WriteLine(IsValid("()[]{}"));
        Console.WriteLine(IsValid("(]"));
    }
}`,
      c: `#include <stdio.h>
#include <string.h>

int isValid(char s[]) {
    // Write your solution here
    return 0;
}

int main() {
    printf("%s\n", isValid("()") ? "true" : "false");
    printf("%s\n", isValid("()[]{}") ? "true" : "false");
    printf("%s\n", isValid("(]") ? "true" : "false");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\ntrue\nfalse",
      python: "True\nTrue\nFalse",
      java: "true\ntrue\nfalse",
      cpp: "true\ntrue\nfalse",
      csharp: "true\ntrue\nfalse",
      c: "true\ntrue\nfalse",
    },
  },
  "min-stack": {
    id: "min-stack",
    title: "Min Stack",
    difficulty: "Medium",
    category: "Stack • Design",
    description: {
      text: "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
      notes: [
        "Implement the MinStack class.",
        "MinStack() initializes the stack object.",
        "void push(int val) pushes the element val onto the stack.",
        "void pop() removes the element on the top of the stack.",
        "int top() gets the top element of the stack.",
        "int getMin() retrieves the minimum element in the stack.",
        "All operations must run in O(1) time.",
      ],
    },
    examples: [
      {
        input:
          '["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]',
        output: "[null,null,null,null,-3,null,0,-2]",
      },
    ],
    constraints: [
      "-2³¹ ≤ val ≤ 2³¹ - 1",
      "Methods pop, top and getMin operations will always be called on non-empty stacks.",
      "At most 3 * 10⁴ calls will be made to push, pop, top, and getMin.",
    ],
    starterCode: {
      javascript: `class MinStack {
  constructor() {
    
  }

  push(val) {
    // Write your solution here
  }

  pop() {
    // Write your solution here
  }

  top() {
    // Write your solution here
  }

  getMin() {
    // Write your solution here
  }
}

// Test cases
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // Expected: -3
minStack.pop();
console.log(minStack.top());    // Expected: 0
console.log(minStack.getMin()); // Expected: -2`,
      python: `class MinStack:
    def __init__(self):
        pass

    def push(self, val):
        # Write your solution here
        pass

    def pop(self):
        # Write your solution here
        pass

    def top(self):
        # Write your solution here
        pass

    def getMin(self):
        # Write your solution here
        pass

# Test cases
minStack = MinStack()
minStack.push(-2)
minStack.push(0)
minStack.push(-3)
print(minStack.getMin())  # Expected: -3
minStack.pop()
print(minStack.top())     # Expected: 0
print(minStack.getMin())  # Expected: -2`,
      java: `class MinStack {
    public MinStack() {
        
    }

    public void push(int val) {
        // Write your solution here
    }

    public void pop() {
        // Write your solution here
    }

    public int top() {
        // Write your solution here
        return 0;
    }

    public int getMin() {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        MinStack minStack = new MinStack();
        minStack.push(-2);
        minStack.push(0);
        minStack.push(-3);
        System.out.println(minStack.getMin()); // Expected: -3
        minStack.pop();
        System.out.println(minStack.top());    // Expected: 0
        System.out.println(minStack.getMin()); // Expected: -2
    }
}`,
      cpp: `#include <iostream>
#include <stack>
using namespace std;

class MinStack {
public:
    MinStack() {
        
    }

    void push(int val) {
        // Write your solution here
    }

    void pop() {
        // Write your solution here
    }

    int top() {
        // Write your solution here
        return 0;
    }

    int getMin() {
        // Write your solution here
        return 0;
    }
};

int main() {
    MinStack minStack;
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    cout << minStack.getMin() << endl; // Expected: -3
    minStack.pop();
    cout << minStack.top() << endl;    // Expected: 0
    cout << minStack.getMin() << endl; // Expected: -2
}`,
      csharp: `using System;

class MinStack {
    public MinStack() {
        
    }

    public void Push(int val) {
        // Write your solution here
    }

    public void Pop() {
        // Write your solution here
    }

    public int Top() {
        // Write your solution here
        return 0;
    }

    public int GetMin() {
        // Write your solution here
        return 0;
    }

    static void Main() {
        MinStack minStack = new MinStack();
        minStack.Push(-2);
        minStack.Push(0);
        minStack.Push(-3);
        Console.WriteLine(minStack.GetMin()); // Expected: -3
        minStack.Pop();
        Console.WriteLine(minStack.Top());    // Expected: 0
        Console.WriteLine(minStack.GetMin()); // Expected: -2
    }
}`,
      c: `#include <stdio.h>

typedef struct {
    // Write your solution here
} MinStack;

MinStack* minStackCreate() {
    // Write your solution here
    return NULL;
}

void minStackPush(MinStack* obj, int val) {
    // Write your solution here
}

void minStackPop(MinStack* obj) {
    // Write your solution here
}

int minStackTop(MinStack* obj) {
    // Write your solution here
    return 0;
}

int minStackGetMin(MinStack* obj) {
    // Write your solution here
    return 0;
}

int main() {
    MinStack* minStack = minStackCreate();
    minStackPush(minStack, -2);
    minStackPush(minStack, 0);
    minStackPush(minStack, -3);
    printf("%d\n", minStackGetMin(minStack)); // Expected: -3
    minStackPop(minStack);
    printf("%d\n", minStackTop(minStack));    // Expected: 0
    printf("%d\n", minStackGetMin(minStack)); // Expected: -2
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "-3\n0\n-2",
      python: "-3\n0\n-2",
      java: "-3\n0\n-2",
      cpp: "-3\n0\n-2",
      csharp: "-3\n0\n-2",
      c: "-3\n0\n-2",
    },
  },
  "evaluate-reverse-polish-notation": {
    id: "evaluate-reverse-polish-notation",
    title: "Evaluate Reverse Polish Notation",
    difficulty: "Medium",
    category: "Array • Stack • Math",
    description: {
      text: "You are given an array of strings tokens that represents an arithmetic expression in Reverse Polish Notation.",
      notes: [
        "Evaluate the expression and return an integer that represents the value of the expression.",
        "The valid operators are '+', '-', '*', and '/'.",
        "Each operand may be an integer or another expression.",
        "Division between two integers should truncate toward zero.",
      ],
    },
    examples: [
      {
        input: 'tokens = ["2","1","+","3","*"]',
        output: "9",
        explanation: "((2 + 1) * 3) = 9",
      },
      {
        input: 'tokens = ["4","13","5","/","+"]',
        output: "6",
        explanation: "(4 + (13 / 5)) = 6",
      },
      {
        input:
          'tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]',
        output: "22",
      },
    ],
    constraints: [
      "1 ≤ tokens.length ≤ 10⁴",
      "tokens[i] is either an operator: '+', '-', '*', or '/', or an integer in the range [-200, 200]",
    ],
    starterCode: {
      javascript: `function evalRPN(tokens) {
  // Write your solution here

}

// Test cases
console.log(evalRPN(["2","1","+","3","*"])); // Expected: 9
console.log(evalRPN(["4","13","5","/","+"])); // Expected: 6
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])); // Expected: 22`,
      python: `def evalRPN(tokens):
    # Write your solution here
    pass

# Test cases
print(evalRPN(["2","1","+","3","*"]))  # Expected: 9
print(evalRPN(["4","13","5","/","+"]))  # Expected: 6
print(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))  # Expected: 22`,
      java: `import java.util.*;

class Solution {
    public static int evalRPN(String[] tokens) {
        // Write your solution here

        return 0;
    }

    public static void main(String[] args) {
        System.out.println(evalRPN(new String[]{"2","1","+","3","*"})); // Expected: 9
        System.out.println(evalRPN(new String[]{"4","13","5","/","+"})); // Expected: 6
        System.out.println(evalRPN(new String[]{"10","6","9","3","+","-11","*","/","*","17","+","5","+"})); // Expected: 22
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

int evalRPN(vector<string>& tokens) {
    // Write your solution here
    return 0;
}

int main() {
    vector<string> v1 = {"2","1","+","3","*"};
    vector<string> v2 = {"4","13","5","/","+"};
    vector<string> v3 = {"10","6","9","3","+","-11","*","/","*","17","+","5","+"};

    cout << evalRPN(v1) << endl;
    cout << evalRPN(v2) << endl;
    cout << evalRPN(v3) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int EvalRPN(string[] tokens) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(EvalRPN(new string[]{"2","1","+","3","*"}));
        Console.WriteLine(EvalRPN(new string[]{"4","13","5","/","+"}));
        Console.WriteLine(EvalRPN(new string[]{"10","6","9","3","+","-11","*","/","*","17","+","5","+"}));
    }
}`,
      c: `#include <stdio.h>

int evalRPN(char* tokens[], int n) {
    // Write your solution here
    return 0;
}

int main() {
    char* a1[] = {"2","1","+","3","*"};
    char* a2[] = {"4","13","5","/","+"};
    char* a3[] = {"10","6","9","3","+","-11","*","/","*","17","+","5","+"};

    printf("%d\n", evalRPN(a1, 5));
    printf("%d\n", evalRPN(a2, 5));
    printf("%d\n", evalRPN(a3, 13));

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "9\n6\n22",
      python: "9\n6\n22",
      java: "9\n6\n22",
      cpp: "9\n6\n22",
      csharp: "9\n6\n22",
      c: "9\n6\n22",
    },
  },
  "daily-temperatures": {
    id: "daily-temperatures",
    title: "Daily Temperatures",
    difficulty: "Medium",
    category: "Array • Stack • Monotonic Stack",
    description: {
      text: "Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.",
      notes: [
        "If there is no future day for which this is possible, keep answer[i] == 0 instead.",
      ],
    },
    examples: [
      {
        input: "temperatures = [73,74,75,71,69,72,76,73]",
        output: "[1,1,4,2,1,1,0,0]",
      },
      {
        input: "temperatures = [30,40,50,60]",
        output: "[1,1,1,0]",
      },
      {
        input: "temperatures = [30,60,90]",
        output: "[1,1,0]",
      },
    ],
    constraints: [
      "1 ≤ temperatures.length ≤ 10⁵",
      "30 ≤ temperatures[i] ≤ 100",
    ],
    starterCode: {
      javascript: `function dailyTemperatures(temperatures) {
  // Write your solution here

}

// Test cases
console.log(dailyTemperatures([73,74,75,71,69,72,76,73])); // Expected: [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30,40,50,60])); // Expected: [1,1,1,0]
console.log(dailyTemperatures([30,60,90])); // Expected: [1,1,0]`,
      python: `def dailyTemperatures(temperatures):
    # Write your solution here
    pass

# Test cases
print(dailyTemperatures([73,74,75,71,69,72,76,73]))  # Expected: [1,1,4,2,1,1,0,0]
print(dailyTemperatures([30,40,50,60]))  # Expected: [1,1,1,0]
print(dailyTemperatures([30,60,90]))  # Expected: [1,1,0]`,
      java: `import java.util.*;

class Solution {
    public static int[] dailyTemperatures(int[] temperatures) {
        // Write your solution here

        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(dailyTemperatures(new int[]{73,74,75,71,69,72,76,73}))); // Expected: [1,1,4,2,1,1,0,0]
        System.out.println(Arrays.toString(dailyTemperatures(new int[]{30,40,50,60}))); // Expected: [1,1,1,0]
        System.out.println(Arrays.toString(dailyTemperatures(new int[]{30,60,90}))); // Expected: [1,1,0]
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> dailyTemperatures(vector<int>& temperatures) {
    // Write your solution here
    return {};
}

int main() {
    vector<int> v1 = {73,74,75,71,69,72,76,73};
    vector<int> v2 = {30,40,50,60};
    vector<int> v3 = {30,60,90};

    auto r1 = dailyTemperatures(v1);
    auto r2 = dailyTemperatures(v2);
    auto r3 = dailyTemperatures(v3);

    for (int x : r1) cout << x << " ";
    cout << endl;

    for (int x : r2) cout << x << " ";
    cout << endl;

    for (int x : r3) cout << x << " ";
    cout << endl;
}`,
      csharp: `using System;

class Solution {
    public static int[] DailyTemperatures(int[] temperatures) {
        // Write your solution here
        return new int[0];
    }

    static void Main() {
        var r1 = DailyTemperatures(new int[]{73,74,75,71,69,72,76,73});
        var r2 = DailyTemperatures(new int[]{30,40,50,60});
        var r3 = DailyTemperatures(new int[]{30,60,90});

        Console.WriteLine(string.Join(" ", r1));
        Console.WriteLine(string.Join(" ", r2));
        Console.WriteLine(string.Join(" ", r3));
    }
}`,
      c: `#include <stdio.h>

void dailyTemperatures(int temperatures[], int n) {
    // Write your solution here
}

int main() {
    int a1[] = {73,74,75,71,69,72,76,73};
    int a2[] = {30,40,50,60};
    int a3[] = {30,60,90};

    dailyTemperatures(a1, 8);
    dailyTemperatures(a2, 4);
    dailyTemperatures(a3, 3);

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[1,1,4,2,1,1,0,0]\n[1,1,1,0]\n[1,1,0]",
      python: "[1, 1, 4, 2, 1, 1, 0, 0]\n[1, 1, 1, 0]\n[1, 1, 0]",
      java: "[1, 1, 4, 2, 1, 1, 0, 0]\n[1, 1, 1, 0]\n[1, 1, 0]",
      cpp: "1 1 4 2 1 1 0 0\n1 1 1 0\n1 1 0",
      csharp: "1 1 4 2 1 1 0 0\n1 1 1 0\n1 1 0",
      c: "1 1 4 2 1 1 0 0\n1 1 1 0\n1 1 0",
    },
  },
  "car-fleet": {
    id: "car-fleet",
    title: "Car Fleet",
    difficulty: "Medium",
    category: "Array • Stack • Sorting",
    description: {
      text: "There are n cars going to the same destination along a one-lane road. The destination is target miles away.",
      notes: [
        "You are given two integer arrays position and speed, both of length n, where position[i] is the position of the ith car and speed[i] is the speed of the ith car.",
        "A car can never pass another car ahead of it, but it can catch up to it and travel at the same speed.",
        "A car fleet is a group of cars traveling at the same position and same speed.",
        "If a car catches up to a fleet right at the destination point, it will still be considered as one fleet.",
        "Return the number of car fleets that will arrive at the destination.",
      ],
    },
    examples: [
      {
        input: "target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]",
        output: "3",
      },
      {
        input: "target = 10, position = [3], speed = [3]",
        output: "1",
      },
      {
        input: "target = 100, position = [0,2,4], speed = [4,2,1]",
        output: "1",
      },
    ],
    constraints: [
      "n == position.length == speed.length",
      "1 ≤ n ≤ 10⁵",
      "0 < target ≤ 10⁶",
      "0 ≤ position[i] < target",
      "0 < speed[i] ≤ 10⁶",
      "All the values of position are unique",
    ],
    starterCode: {
      javascript: `function carFleet(target, position, speed) {
  // Write your solution here

}

// Test cases
console.log(carFleet(12, [10,8,0,5,3], [2,4,1,1,3])); // Expected: 3
console.log(carFleet(10, [3], [3])); // Expected: 1
console.log(carFleet(100, [0,2,4], [4,2,1])); // Expected: 1`,
      python: `def carFleet(target, position, speed):
    # Write your solution here
    pass

# Test cases
print(carFleet(12, [10,8,0,5,3], [2,4,1,1,3]))  # Expected: 3
print(carFleet(10, [3], [3]))  # Expected: 1
print(carFleet(100, [0,2,4], [4,2,1]))  # Expected: 1`,
      java: `import java.util.*;

class Solution {
    public static int carFleet(int target, int[] position, int[] speed) {
        // Write your solution here

        return 0;
    }

    public static void main(String[] args) {
        System.out.println(carFleet(12, new int[]{10,8,0,5,3}, new int[]{2,4,1,1,3})); // Expected: 3
        System.out.println(carFleet(10, new int[]{3}, new int[]{3})); // Expected: 1
        System.out.println(carFleet(100, new int[]{0,2,4}, new int[]{4,2,1})); // Expected: 1
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int carFleet(int target, vector<int>& position, vector<int>& speed) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> p1 = {10,8,0,5,3};
    vector<int> s1 = {2,4,1,1,3};

    vector<int> p2 = {3};
    vector<int> s2 = {3};

    vector<int> p3 = {0,2,4};
    vector<int> s3 = {4,2,1};

    cout << carFleet(12, p1, s1) << endl;
    cout << carFleet(10, p2, s2) << endl;
    cout << carFleet(100, p3, s3) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int CarFleet(int target, int[] position, int[] speed) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(CarFleet(12, new int[]{10,8,0,5,3}, new int[]{2,4,1,1,3}));
        Console.WriteLine(CarFleet(10, new int[]{3}, new int[]{3}));
        Console.WriteLine(CarFleet(100, new int[]{0,2,4}, new int[]{4,2,1}));
    }
}`,
      c: `#include <stdio.h>

int carFleet(int target, int position[], int speed[], int n) {
    // Write your solution here
    return 0;
}

int main() {
    int p1[] = {10,8,0,5,3};
    int s1[] = {2,4,1,1,3};

    int p2[] = {3};
    int s2[] = {3};

    int p3[] = {0,2,4};
    int s3[] = {4,2,1};

    printf("%d\n", carFleet(12, p1, s1, 5));
    printf("%d\n", carFleet(10, p2, s2, 1));
    printf("%d\n", carFleet(100, p3, s3, 3));

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "3\n1\n1",
      python: "3\n1\n1",
      java: "3\n1\n1",
      cpp: "3\n1\n1",
      csharp: "3\n1\n1",
      c: "3\n1\n1",
    },
  },
  "largest-rectangle-in-histogram": {
    id: "largest-rectangle-in-histogram",
    title: "Largest Rectangle in Histogram",
    difficulty: "Hard",
    category: "Array • Stack • Monotonic Stack",
    description: {
      text: "Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.",
      notes: [],
    },
    examples: [
      {
        input: "heights = [2,1,5,6,2,3]",
        output: "10",
        explanation:
          "The largest rectangle is formed by bars 5 and 6 with width 2.",
      },
      {
        input: "heights = [2,4]",
        output: "4",
      },
    ],
    constraints: ["1 ≤ heights.length ≤ 10⁵", "0 ≤ heights[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function largestRectangleArea(heights) {
  // Write your solution here

}

// Test cases
console.log(largestRectangleArea([2,1,5,6,2,3])); // Expected: 10
console.log(largestRectangleArea([2,4])); // Expected: 4`,
      python: `def largestRectangleArea(heights):
    # Write your solution here
    pass

# Test cases
print(largestRectangleArea([2,1,5,6,2,3]))  # Expected: 10
print(largestRectangleArea([2,4]))  # Expected: 4`,
      java: `class Solution {
    public static int largestRectangleArea(int[] heights) {
        // Write your solution here

        return 0;
    }

    public static void main(String[] args) {
        System.out.println(largestRectangleArea(new int[]{2,1,5,6,2,3})); // Expected: 10
        System.out.println(largestRectangleArea(new int[]{2,4})); // Expected: 4
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int largestRectangleArea(vector<int>& heights) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> v1 = {2,1,5,6,2,3};
    vector<int> v2 = {2,4};

    cout << largestRectangleArea(v1) << endl;
    cout << largestRectangleArea(v2) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int LargestRectangleArea(int[] heights) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(LargestRectangleArea(new int[]{2,1,5,6,2,3}));
        Console.WriteLine(LargestRectangleArea(new int[]{2,4}));
    }
}`,
      c: `#include <stdio.h>

int largestRectangleArea(int heights[], int n) {
    // Write your solution here
    return 0;
}

int main() {
    int a1[] = {2,1,5,6,2,3};
    int a2[] = {2,4};

    printf("%d\n", largestRectangleArea(a1, 6));
    printf("%d\n", largestRectangleArea(a2, 2));

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "10\n4",
      python: "10\n4",
      java: "10\n4",
      cpp: "10\n4",
      csharp: "10\n4",
      c: "10\n4",
    },
  },

  //Binary Search
  "binary-search": {
    id: "binary-search",
    title: "Binary Search",
    difficulty: "Easy",
    category: "Array • Binary Search",
    description: {
      text: "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.",
      notes: [
        "If target exists, then return its index. Otherwise, return -1.",
        "You must write an algorithm with O(log n) runtime complexity.",
      ],
    },
    examples: [
      {
        input: "nums = [-1,0,3,5,9,12], target = 9",
        output: "4",
      },
      {
        input: "nums = [-1,0,3,5,9,12], target = 2",
        output: "-1",
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 10⁴",
      "-10⁴ < nums[i], target < 10⁴",
      "All the integers in nums are unique",
      "nums is sorted in ascending order",
    ],
    starterCode: {
      javascript: `function search(nums, target) {
  // Write your solution here

}

// Test cases
console.log(search([-1,0,3,5,9,12], 9)); // Expected: 4
console.log(search([-1,0,3,5,9,12], 2)); // Expected: -1`,
      python: `def search(nums, target):
    # Write your solution here
    pass

# Test cases
print(search([-1,0,3,5,9,12], 9))  # Expected: 4
print(search([-1,0,3,5,9,12], 2))  # Expected: -1`,
      java: `class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here

        return -1;
    }

    public static void main(String[] args) {
        System.out.println(search(new int[]{-1,0,3,5,9,12}, 9)); // Expected: 4
        System.out.println(search(new int[]{-1,0,3,5,9,12}, 2)); // Expected: -1
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int search(vector<int>& nums, int target) {
    // Write your solution here
    return -1;
}

int main() {
    vector<int> v = {-1,0,3,5,9,12};

    cout << search(v, 9) << endl;
    cout << search(v, 2) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int Search(int[] nums, int target) {
        // Write your solution here
        return -1;
    }

    static void Main() {
        Console.WriteLine(Search(new int[]{-1,0,3,5,9,12}, 9));
        Console.WriteLine(Search(new int[]{-1,0,3,5,9,12}, 2));
    }
}`,
      c: `#include <stdio.h>

int search(int nums[], int n, int target) {
    // Write your solution here
    return -1;
}

int main() {
    int a[] = {-1,0,3,5,9,12};

    printf("%d\n", search(a, 6, 9));
    printf("%d\n", search(a, 6, 2));

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "4\n-1",
      python: "4\n-1",
      java: "4\n-1",
      cpp: "4\n-1",
      csharp: "4\n-1",
      c: "4\n-1",
    },
  },
  "search-a-2d-matrix": {
    id: "search-a-2d-matrix",
    title: "Search a 2D Matrix",
    difficulty: "Medium",
    category: "Array • Binary Search • Matrix",
    description: {
      text: "You are given an m x n integer matrix matrix with the following two properties:",
      notes: [
        "Each row is sorted in non-decreasing order.",
        "The first integer of each row is greater than the last integer of the previous row.",
        "Given an integer target, return true if target is in matrix or false otherwise.",
        "You must write a solution in O(log(m * n)) time complexity.",
      ],
    },
    examples: [
      {
        input: "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3",
        output: "true",
      },
      {
        input: "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13",
        output: "false",
      },
    ],
    constraints: [
      "m == matrix.length",
      "n == matrix[i].length",
      "1 ≤ m, n ≤ 100",
      "-10⁴ ≤ matrix[i][j], target ≤ 10⁴",
    ],
    starterCode: {
      javascript: `function searchMatrix(matrix, target) {
  // Write your solution here

}

// Test cases
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)); // Expected: true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)); // Expected: false`,
      python: `def searchMatrix(matrix, target):
    # Write your solution here
    pass

# Test cases
print(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3))  # Expected: True
print(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13))  # Expected: False`,
      java: `class Solution {
    public static boolean searchMatrix(int[][] matrix, int target) {
        // Write your solution here

        return false;
    }

    public static void main(String[] args) {
        int[][] m = {
            {1,3,5,7},
            {10,11,16,20},
            {23,30,34,60}
        };

        System.out.println(searchMatrix(m, 3));  // Expected: true
        System.out.println(searchMatrix(m, 13)); // Expected: false
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

bool searchMatrix(vector<vector<int>>& matrix, int target) {
    // Write your solution here
    return false;
}

int main() {
    vector<vector<int>> m = {
        {1,3,5,7},
        {10,11,16,20},
        {23,30,34,60}
    };

    cout << boolalpha;
    cout << searchMatrix(m, 3) << endl;
    cout << searchMatrix(m, 13) << endl;
}`,
      csharp: `using System;

class Solution {
    public static bool SearchMatrix(int[][] matrix, int target) {
        // Write your solution here
        return false;
    }

    static void Main() {
        int[][] m = {
            new int[]{1,3,5,7},
            new int[]{10,11,16,20},
            new int[]{23,30,34,60}
        };

        Console.WriteLine(SearchMatrix(m, 3));
        Console.WriteLine(SearchMatrix(m, 13));
    }
}`,
      c: `#include <stdio.h>

int searchMatrix(int matrix[][4], int m, int n, int target) {
    // Write your solution here
    return 0;
}

int main() {
    int matrix[3][4] = {
        {1,3,5,7},
        {10,11,16,20},
        {23,30,34,60}
    };

    printf("%s\n", searchMatrix(matrix, 3, 4, 3) ? "true" : "false");
    printf("%s\n", searchMatrix(matrix, 3, 4, 13) ? "true" : "false");

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
      cpp: "true\nfalse",
      csharp: "true\nfalse",
      c: "true\nfalse",
    },
  },
  "koko-eating-bananas": {
    id: "koko-eating-bananas",
    title: "Koko Eating Bananas",
    difficulty: "Medium",
    category: "Array • Binary Search",
    description: {
      text: "Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas.",
      notes: [
        "The guards have gone and will come back in h hours.",
        "Koko can decide her bananas-per-hour eating speed of k.",
        "Each hour, she chooses some pile of bananas and eats k bananas from that pile.",
        "If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.",
        "Return the minimum integer k such that she can eat all the bananas within h hours.",
      ],
    },
    examples: [
      {
        input: "piles = [3,6,7,11], h = 8",
        output: "4",
      },
      {
        input: "piles = [30,11,23,4,20], h = 5",
        output: "30",
      },
      {
        input: "piles = [30,11,23,4,20], h = 6",
        output: "23",
      },
    ],
    constraints: [
      "1 ≤ piles.length ≤ 10⁴",
      "piles.length ≤ h ≤ 10⁹",
      "1 ≤ piles[i] ≤ 10⁹",
    ],
    starterCode: {
      javascript: `function minEatingSpeed(piles, h) {
  // Write your solution here

}

// Test cases
console.log(minEatingSpeed([3,6,7,11], 8)); // Expected: 4
console.log(minEatingSpeed([30,11,23,4,20], 5)); // Expected: 30
console.log(minEatingSpeed([30,11,23,4,20], 6)); // Expected: 23`,
      python: `def minEatingSpeed(piles, h):
    # Write your solution here
    pass

# Test cases
print(minEatingSpeed([3,6,7,11], 8))  # Expected: 4
print(minEatingSpeed([30,11,23,4,20], 5))  # Expected: 30
print(minEatingSpeed([30,11,23,4,20], 6))  # Expected: 23`,
      java: `class Solution {
    public static int minEatingSpeed(int[] piles, int h) {
        // Write your solution here

        return 0;
    }

    public static void main(String[] args) {
        System.out.println(minEatingSpeed(new int[]{3,6,7,11}, 8)); // Expected: 4
        System.out.println(minEatingSpeed(new int[]{30,11,23,4,20}, 5)); // Expected: 30
        System.out.println(minEatingSpeed(new int[]{30,11,23,4,20}, 6)); // Expected: 23
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int minEatingSpeed(vector<int>& piles, int h) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> p1 = {3,6,7,11};
    vector<int> p2 = {30,11,23,4,20};
    vector<int> p3 = {30,11,23,4,20};

    cout << minEatingSpeed(p1, 8) << endl;
    cout << minEatingSpeed(p2, 5) << endl;
    cout << minEatingSpeed(p3, 6) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int MinEatingSpeed(int[] piles, int h) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(MinEatingSpeed(new int[]{3,6,7,11}, 8));
        Console.WriteLine(MinEatingSpeed(new int[]{30,11,23,4,20}, 5));
        Console.WriteLine(MinEatingSpeed(new int[]{30,11,23,4,20}, 6));
    }
}`,
      c: `#include <stdio.h>

int minEatingSpeed(int piles[], int n, int h) {
    // Write your solution here
    return 0;
}

int main() {
    int p1[] = {3,6,7,11};
    int p2[] = {30,11,23,4,20};
    int p3[] = {30,11,23,4,20};

    printf("%d\n", minEatingSpeed(p1, 4, 8));
    printf("%d\n", minEatingSpeed(p2, 5, 5));
    printf("%d\n", minEatingSpeed(p3, 5, 6));

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "4\n30\n23",
      python: "4\n30\n23",
      java: "4\n30\n23",
      cpp: "4\n30\n23",
      csharp: "4\n30\n23",
      c: "4\n30\n23",
    },
  },
  "find-minimum-in-rotated-sorted-array": {
    id: "find-minimum-in-rotated-sorted-array",
    title: "Find Minimum in Rotated Sorted Array",
    difficulty: "Medium",
    category: "Array • Binary Search",
    description: {
      text: "Suppose an array of length n sorted in ascending order is rotated between 1 and n times.",
      notes: [
        "For example, the array nums = [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2] if it was rotated 4 times.",
        "Given the sorted rotated array nums of unique elements, return the minimum element of this array.",
        "You must write an algorithm that runs in O(log n) time.",
      ],
    },
    examples: [
      {
        input: "nums = [3,4,5,1,2]",
        output: "1",
      },
      {
        input: "nums = [4,5,6,7,0,1,2]",
        output: "0",
      },
      {
        input: "nums = [11,13,15,17]",
        output: "11",
      },
    ],
    constraints: [
      "n == nums.length",
      "1 ≤ n ≤ 5000",
      "-5000 ≤ nums[i] ≤ 5000",
      "All the integers of nums are unique",
      "nums is sorted and rotated between 1 and n times",
    ],
    starterCode: {
      javascript: `function findMin(nums) {
  // Write your solution here

}

// Test cases
console.log(findMin([3,4,5,1,2])); // Expected: 1
console.log(findMin([4,5,6,7,0,1,2])); // Expected: 0
console.log(findMin([11,13,15,17])); // Expected: 11`,
      python: `def findMin(nums):
    # Write your solution here
    pass

# Test cases
print(findMin([3,4,5,1,2]))  # Expected: 1
print(findMin([4,5,6,7,0,1,2]))  # Expected: 0
print(findMin([11,13,15,17]))  # Expected: 11`,
      java: `class Solution {
    public static int findMin(int[] nums) {
        // Write your solution here

        return 0;
    }

    public static void main(String[] args) {
        System.out.println(findMin(new int[]{3,4,5,1,2})); // Expected: 1
        System.out.println(findMin(new int[]{4,5,6,7,0,1,2})); // Expected: 0
        System.out.println(findMin(new int[]{11,13,15,17})); // Expected: 11
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int findMin(vector<int>& nums) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> v1 = {3,4,5,1,2};
    vector<int> v2 = {4,5,6,7,0,1,2};
    vector<int> v3 = {11,13,15,17};

    cout << findMin(v1) << endl;
    cout << findMin(v2) << endl;
    cout << findMin(v3) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int FindMin(int[] nums) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(FindMin(new int[]{3,4,5,1,2}));
        Console.WriteLine(FindMin(new int[]{4,5,6,7,0,1,2}));
        Console.WriteLine(FindMin(new int[]{11,13,15,17}));
    }
}`,
      c: `#include <stdio.h>

int findMin(int nums[], int n) {
    // Write your solution here
    return 0;
}

int main() {
    int a1[] = {3,4,5,1,2};
    int a2[] = {4,5,6,7,0,1,2};
    int a3[] = {11,13,15,17};

    printf("%d\n", findMin(a1, 5));
    printf("%d\n", findMin(a2, 7));
    printf("%d\n", findMin(a3, 4));

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "1\n0\n11",
      python: "1\n0\n11",
      java: "1\n0\n11",
      cpp: "1\n0\n11",
      csharp: "1\n0\n11",
      c: "1\n0\n11",
    },
  },
  "search-in-rotated-sorted-array": {
    id: "search-in-rotated-sorted-array",
    title: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    category: "Array • Binary Search",
    description: {
      text: "There is an integer array nums sorted in ascending order (with distinct values).",
      notes: [
        "Before being passed to your function, nums is possibly rotated at an unknown pivot index.",
        "Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.",
        "You must write an algorithm with O(log n) runtime complexity.",
      ],
    },
    examples: [
      {
        input: "nums = [4,5,6,7,0,1,2], target = 0",
        output: "4",
      },
      {
        input: "nums = [4,5,6,7,0,1,2], target = 3",
        output: "-1",
      },
      {
        input: "nums = [1], target = 0",
        output: "-1",
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 5000",
      "-10⁴ ≤ nums[i] ≤ 10⁴",
      "All values of nums are unique",
      "nums is an ascending array that is possibly rotated",
      "-10⁴ ≤ target ≤ 10⁴",
    ],
    starterCode: {
      javascript: `function search(nums, target) {
  // Write your solution here

}

// Test cases
console.log(search([4,5,6,7,0,1,2], 0)); // Expected: 4
console.log(search([4,5,6,7,0,1,2], 3)); // Expected: -1
console.log(search([1], 0)); // Expected: -1`,
      python: `def search(nums, target):
    # Write your solution here
    pass

# Test cases
print(search([4,5,6,7,0,1,2], 0))  # Expected: 4
print(search([4,5,6,7,0,1,2], 3))  # Expected: -1
print(search([1], 0))  # Expected: -1`,
      java: `class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here

        return -1;
    }

    public static void main(String[] args) {
        System.out.println(search(new int[]{4,5,6,7,0,1,2}, 0)); // Expected: 4
        System.out.println(search(new int[]{4,5,6,7,0,1,2}, 3)); // Expected: -1
        System.out.println(search(new int[]{1}, 0)); // Expected: -1
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int search(vector<int>& nums, int target) {
    // Write your solution here
    return -1;
}

int main() {
    vector<int> v1 = {4,5,6,7,0,1,2};
    vector<int> v2 = {4,5,6,7,0,1,2};
    vector<int> v3 = {1};

    cout << search(v1, 0) << endl;
    cout << search(v2, 3) << endl;
    cout << search(v3, 0) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int Search(int[] nums, int target) {
        // Write your solution here
        return -1;
    }

    static void Main() {
        Console.WriteLine(Search(new int[]{4,5,6,7,0,1,2}, 0));
        Console.WriteLine(Search(new int[]{4,5,6,7,0,1,2}, 3));
        Console.WriteLine(Search(new int[]{1}, 0));
    }
}`,
      c: `#include <stdio.h>

int search(int nums[], int n, int target) {
    // Write your solution here
    return -1;
}

int main() {
    int a1[] = {4,5,6,7,0,1,2};
    int a2[] = {4,5,6,7,0,1,2};
    int a3[] = {1};

    printf("%d\n", search(a1, 7, 0));
    printf("%d\n", search(a2, 7, 3));
    printf("%d\n", search(a3, 1, 0));

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "4\n-1\n-1",
      python: "4\n-1\n-1",
      java: "4\n-1\n-1",
      cpp: "4\n-1\n-1",
      csharp: "4\n-1\n-1",
      c: "4\n-1\n-1",
    },
  },
  "time-based-key-value-store": {
    id: "time-based-key-value-store",
    title: "Time Based Key-Value Store",
    difficulty: "Medium",
    category: "Hash Table • Binary Search • Design",
    description: {
      text: "Design a time-based key-value data structure that can store multiple values for the same key at different time stamps.",
      notes: [
        "Implement the TimeMap class:",
        "TimeMap() Initializes the object of the data structure.",
        "void set(String key, String value, int timestamp) Stores the key with the value at the given time timestamp.",
        "String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp.",
        "If there are multiple such values, it returns the value associated with the largest timestamp_prev.",
        'If there are no values, return "".',
      ],
    },
    examples: [
      {
        input:
          '["TimeMap","set","get","get","set","get","get"]\n[[],["foo","bar",1],["foo",1],["foo",3],["foo","bar2",4],["foo",4],["foo",5]]',
        output: '[null,null,"bar","bar",null,"bar2","bar2"]',
      },
    ],
    constraints: [
      "1 ≤ key.length, value.length ≤ 100",
      "key and value consist of lowercase English letters and digits",
      "1 ≤ timestamp ≤ 10⁷",
      "All the timestamps timestamp of set are strictly increasing",
      "At most 2 * 10⁵ calls will be made to set and get",
    ],
    starterCode: {
      javascript: `class TimeMap {
  constructor() {
    
  }

  set(key, value, timestamp) {
    // Write your solution here
  }

  get(key, timestamp) {
    // Write your solution here
  }
}

// Test cases
const timeMap = new TimeMap();
timeMap.set("foo", "bar", 1);
console.log(timeMap.get("foo", 1)); // Expected: "bar"
console.log(timeMap.get("foo", 3)); // Expected: "bar"
timeMap.set("foo", "bar2", 4);
console.log(timeMap.get("foo", 4)); // Expected: "bar2"
console.log(timeMap.get("foo", 5)); // Expected: "bar2"`,
      python: `class TimeMap:
    def __init__(self):
        pass

    def set(self, key, value, timestamp):
        # Write your solution here
        pass

    def get(self, key, timestamp):
        # Write your solution here
        pass

# Test cases
timeMap = TimeMap()
timeMap.set("foo", "bar", 1)
print(timeMap.get("foo", 1))  # Expected: "bar"
print(timeMap.get("foo", 3))  # Expected: "bar"
timeMap.set("foo", "bar2", 4)
print(timeMap.get("foo", 4))  # Expected: "bar2"
print(timeMap.get("foo", 5))  # Expected: "bar2"`,
      java: `import java.util.*;

class TimeMap {
    public TimeMap() {
        
    }

    public void set(String key, String value, int timestamp) {
        // Write your solution here
    }

    public String get(String key, int timestamp) {
        // Write your solution here
        return "";
    }

    public static void main(String[] args) {
        TimeMap timeMap = new TimeMap();
        timeMap.set("foo", "bar", 1);
        System.out.println(timeMap.get("foo", 1)); // Expected: "bar"
        System.out.println(timeMap.get("foo", 3)); // Expected: "bar"
        timeMap.set("foo", "bar2", 4);
        System.out.println(timeMap.get("foo", 4)); // Expected: "bar2"
        System.out.println(timeMap.get("foo", 5)); // Expected: "bar2"
    }
}`,
      cpp: `#include <iostream>
#include <unordered_map>
#include <vector>
using namespace std;

class TimeMap {
public:
    TimeMap() {
        
    }

    void set(string key, string value, int timestamp) {
        // Write your solution here
    }

    string get(string key, int timestamp) {
        // Write your solution here
        return "";
    }
};

int main() {
    TimeMap timeMap;
    timeMap.set("foo", "bar", 1);
    cout << timeMap.get("foo", 1) << endl; // Expected: bar
    cout << timeMap.get("foo", 3) << endl; // Expected: bar
    timeMap.set("foo", "bar2", 4);
    cout << timeMap.get("foo", 4) << endl; // Expected: bar2
    cout << timeMap.get("foo", 5) << endl; // Expected: bar2
}`,
      csharp: `using System;

class TimeMap {
    public TimeMap() {
        
    }

    public void Set(string key, string value, int timestamp) {
        // Write your solution here
    }

    public string Get(string key, int timestamp) {
        // Write your solution here
        return "";
    }

    static void Main() {
        TimeMap timeMap = new TimeMap();
        timeMap.Set("foo", "bar", 1);
        Console.WriteLine(timeMap.Get("foo", 1));
        Console.WriteLine(timeMap.Get("foo", 3));
        timeMap.Set("foo", "bar2", 4);
        Console.WriteLine(timeMap.Get("foo", 4));
        Console.WriteLine(timeMap.Get("foo", 5));
    }
}`,
      c: `#include <stdio.h>

typedef struct {
    // Write your solution here
} TimeMap;

TimeMap* timeMapCreate() {
    // Write your solution here
    return NULL;
}

void timeMapSet(TimeMap* obj, char* key, char* value, int timestamp) {
    // Write your solution here
}

char* timeMapGet(TimeMap* obj, char* key, int timestamp) {
    // Write your solution here
    return "";
}

int main() {
    TimeMap* timeMap = timeMapCreate();
    timeMapSet(timeMap, "foo", "bar", 1);
    printf("%s\n", timeMapGet(timeMap, "foo", 1)); // Expected: bar
    printf("%s\n", timeMapGet(timeMap, "foo", 3)); // Expected: bar
    timeMapSet(timeMap, "foo", "bar2", 4);
    printf("%s\n", timeMapGet(timeMap, "foo", 4)); // Expected: bar2
    printf("%s\n", timeMapGet(timeMap, "foo", 5)); // Expected: bar2
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "bar\nbar\nbar2\nbar2",
      python: "bar\nbar\nbar2\nbar2",
      java: "bar\nbar\nbar2\nbar2",
      cpp: "bar\nbar\nbar2\nbar2",
      csharp: "bar\nbar\nbar2\nbar2",
      c: "bar\nbar\nbar2\nbar2",
    },
  },
  "median-of-two-sorted-arrays": {
    id: "median-of-two-sorted-arrays",
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    category: "Array • Binary Search • Divide and Conquer",
    description: {
      text: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
      notes: ["The overall run time complexity should be O(log (m+n))."],
    },
    examples: [
      {
        input: "nums1 = [1,3], nums2 = [2]",
        output: "2.0",
      },
      {
        input: "nums1 = [1,2], nums2 = [3,4]",
        output: "2.5",
      },
    ],
    constraints: [
      "nums1.length == m",
      "nums2.length == n",
      "0 ≤ m ≤ 1000",
      "0 ≤ n ≤ 1000",
      "1 ≤ m + n ≤ 2000",
      "-10⁶ ≤ nums1[i], nums2[i] ≤ 10⁶",
    ],
    starterCode: {
      javascript: `function findMedianSortedArrays(nums1, nums2) {
  // Write your solution here

}

// Test cases
console.log(findMedianSortedArrays([1,3], [2])); // Expected: 2.0
console.log(findMedianSortedArrays([1,2], [3,4])); // Expected: 2.5`,
      python: `def findMedianSortedArrays(nums1, nums2):
    # Write your solution here
    pass

# Test cases
print(findMedianSortedArrays([1,3], [2]))  # Expected: 2.0
print(findMedianSortedArrays([1,2], [3,4]))  # Expected: 2.5`,
      java: `class Solution {
    public static double findMedianSortedArrays(int[] nums1, int[] nums2) {
        // Write your solution here

        return 0.0;
    }

    public static void main(String[] args) {
        System.out.println(findMedianSortedArrays(new int[]{1,3}, new int[]{2})); // Expected: 2.0
        System.out.println(findMedianSortedArrays(new int[]{1,2}, new int[]{3,4})); // Expected: 2.5
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
    // Write your solution here
    return 0.0;
}

int main() {
    vector<int> v1 = {1,3};
    vector<int> v2 = {2};
    vector<int> v3 = {1,2};
    vector<int> v4 = {3,4};

    cout << findMedianSortedArrays(v1, v2) << endl;
    cout << findMedianSortedArrays(v3, v4) << endl;
}`,
      csharp: `using System;

class Solution {
    public static double FindMedianSortedArrays(int[] nums1, int[] nums2) {
        // Write your solution here
        return 0.0;
    }

    static void Main() {
        Console.WriteLine(FindMedianSortedArrays(new int[]{1,3}, new int[]{2}));
        Console.WriteLine(FindMedianSortedArrays(new int[]{1,2}, new int[]{3,4}));
    }
}`,
      c: `#include <stdio.h>

double findMedianSortedArrays(int nums1[], int m, int nums2[], int n) {
    // Write your solution here
    return 0.0;
}

int main() {
    int a1[] = {1,3};
    int a2[] = {2};
    int a3[] = {1,2};
    int a4[] = {3,4};

    printf("%.1f\n", findMedianSortedArrays(a1, 2, a2, 1));
    printf("%.1f\n", findMedianSortedArrays(a3, 2, a4, 2));

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "2\n2.5",
      python: "2.0\n2.5",
      java: "2.0\n2.5",
      cpp: "2\n2.5",
      csharp: "2\n2.5",
      c: "2.0\n2.5",
    },
  },

  //Linked List
  "reverse-linked-list": {
    id: "reverse-linked-list",
    title: "Reverse Linked List",
    difficulty: "Easy",
    category: "Linked List",
    description: {
      text: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
      notes: [],
    },
    examples: [
      {
        input: "head = [1,2,3,4,5]",
        output: "[5,4,3,2,1]",
      },
      {
        input: "head = [1,2]",
        output: "[2,1]",
      },
      {
        input: "head = []",
        output: "[]",
      },
    ],
    constraints: [
      "The number of nodes in the list is the range [0, 5000]",
      "-5000 ≤ Node.val ≤ 5000",
    ],
    starterCode: {
      javascript: `function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function reverseList(head) {
  // Write your solution here

}

// Test cases
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
let reversed = reverseList(head);
while (reversed) {
  console.log(reversed.val);
  reversed = reversed.next;
}`,
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverseList(head):
    # Write your solution here
    pass

# Test cases
head = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))
reversed_head = reverseList(head)
while reversed_head:
    print(reversed_head.val)
    reversed_head = reversed_head.next`,
      java: `class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class Solution {
    public static ListNode reverseList(ListNode head) {
        // Write your solution here
        return null;
    }

    public static void main(String[] args) {
        ListNode head = new ListNode(1,
            new ListNode(2,
                new ListNode(3,
                    new ListNode(4,
                        new ListNode(5)
                    )
                )
            )
        );

        ListNode res = reverseList(head);
        while (res != null) {
            System.out.println(res.val);
            res = res.next;
        }
    }
}`,
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(NULL) {}
};

ListNode* reverseList(ListNode* head) {
    // Write your solution here
    return NULL;
}

int main() {
    ListNode* head = new ListNode(1);
    head->next = new ListNode(2);
    head->next->next = new ListNode(3);
    head->next->next->next = new ListNode(4);
    head->next->next->next->next = new ListNode(5);

    ListNode* res = reverseList(head);
    while (res) {
        cout << res->val << endl;
        res = res->next;
    }
}`,
      csharp: `using System;

public class ListNode {
    public int val;
    public ListNode next;
    public ListNode(int val=0, ListNode next=null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    public static ListNode ReverseList(ListNode head) {
        // Write your solution here
        return null;
    }

    static void Main() {
        ListNode head = new ListNode(1,
            new ListNode(2,
                new ListNode(3,
                    new ListNode(4,
                        new ListNode(5)
                    )
                )
            )
        );

        var res = ReverseList(head);
        while (res != null) {
            Console.WriteLine(res.val);
            res = res.next;
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

struct ListNode* reverseList(struct ListNode* head) {
    // Write your solution here
    return NULL;
}

int main() {
    struct ListNode* head = (struct ListNode*)malloc(sizeof(struct ListNode));
    head->val = 1;
    head->next = (struct ListNode*)malloc(sizeof(struct ListNode));
    head->next->val = 2;
    head->next->next = (struct ListNode*)malloc(sizeof(struct ListNode));
    head->next->next->val = 3;
    head->next->next->next = (struct ListNode*)malloc(sizeof(struct ListNode));
    head->next->next->next->val = 4;
    head->next->next->next->next = (struct ListNode*)malloc(sizeof(struct ListNode));
    head->next->next->next->next->val = 5;
    head->next->next->next->next->next = NULL;

    struct ListNode* res = reverseList(head);
    while (res != NULL) {
        printf("%d\n", res->val);
        res = res->next;
    }

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "5\n4\n3\n2\n1",
      python: "5\n4\n3\n2\n1",
      java: "5\n4\n3\n2\n1",
      cpp: "5\n4\n3\n2\n1",
      csharp: "5\n4\n3\n2\n1",
      c: "5\n4\n3\n2\n1",
    },
  },
  "merge-two-sorted-lists": {
    id: "merge-two-sorted-lists",
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    category: "Linked List",
    description: {
      text: "You are given the heads of two sorted linked lists list1 and list2.",
      notes: [
        "Merge the two lists into one sorted list.",
        "The list should be made by splicing together the nodes of the first two lists.",
        "Return the head of the merged linked list.",
      ],
    },
    examples: [
      {
        input: "list1 = [1,2,4], list2 = [1,3,4]",
        output: "[1,1,2,3,4,4]",
      },
      {
        input: "list1 = [], list2 = []",
        output: "[]",
      },
      {
        input: "list1 = [], list2 = [0]",
        output: "[0]",
      },
    ],
    constraints: [
      "The number of nodes in both lists is in the range [0, 50]",
      "-100 ≤ Node.val ≤ 100",
      "Both list1 and list2 are sorted in non-decreasing order",
    ],
    starterCode: {
      javascript: `function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function mergeTwoLists(list1, list2) {
  // Write your solution here

}

// Test cases
let l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

let merged = mergeTwoLists(l1, l2);
while (merged) {
  console.log(merged.val);
  merged = merged.next;
}`,
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def mergeTwoLists(list1, list2):
    # Write your solution here
    pass

# Test cases
l1 = ListNode(1, ListNode(2, ListNode(4)))
l2 = ListNode(1, ListNode(3, ListNode(4)))

merged = mergeTwoLists(l1, l2)
while merged:
    print(merged.val)
    merged = merged.next`,
      java: `class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class Solution {
    public static ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        // Write your solution here
        return null;
    }

    public static void main(String[] args) {
        ListNode l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
        ListNode l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

        ListNode res = mergeTwoLists(l1, l2);
        while (res != null) {
            System.out.println(res.val);
            res = res.next;
        }
    }
}`,
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(NULL) {}
};

ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
    // Write your solution here
    return NULL;
}

int main() {
    ListNode* l1 = new ListNode(1);
    l1->next = new ListNode(2);
    l1->next->next = new ListNode(4);

    ListNode* l2 = new ListNode(1);
    l2->next = new ListNode(3);
    l2->next->next = new ListNode(4);

    ListNode* res = mergeTwoLists(l1, l2);
    while (res) {
        cout << res->val << endl;
        res = res->next;
    }
}`,
      csharp: `using System;

public class ListNode {
    public int val;
    public ListNode next;
    public ListNode(int val=0, ListNode next=null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    public static ListNode MergeTwoLists(ListNode list1, ListNode list2) {
        // Write your solution here
        return null;
    }

    static void Main() {
        ListNode l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
        ListNode l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

        var res = MergeTwoLists(l1, l2);
        while (res != null) {
            Console.WriteLine(res.val);
            res = res.next;
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

struct ListNode* mergeTwoLists(struct ListNode* list1, struct ListNode* list2) {
    // Write your solution here
    return NULL;
}

int main() {
    struct ListNode* l1 = (struct ListNode*)malloc(sizeof(struct ListNode));
    l1->val = 1;
    l1->next = (struct ListNode*)malloc(sizeof(struct ListNode));
    l1->next->val = 2;
    l1->next->next = (struct ListNode*)malloc(sizeof(struct ListNode));
    l1->next->next->val = 4;
    l1->next->next->next = NULL;

    struct ListNode* l2 = (struct ListNode*)malloc(sizeof(struct ListNode));
    l2->val = 1;
    l2->next = (struct ListNode*)malloc(sizeof(struct ListNode));
    l2->next->val = 3;
    l2->next->next = (struct ListNode*)malloc(sizeof(struct ListNode));
    l2->next->next->val = 4;
    l2->next->next->next = NULL;

    struct ListNode* res = mergeTwoLists(l1, l2);
    while (res != NULL) {
        printf("%d\n", res->val);
        res = res->next;
    }

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "1\n1\n2\n3\n4\n4",
      python: "1\n1\n2\n3\n4\n4",
      java: "1\n1\n2\n3\n4\n4",
      cpp: "1\n1\n2\n3\n4\n4",
      csharp: "1\n1\n2\n3\n4\n4",
      c: "1\n1\n2\n3\n4\n4",
    },
  },
  "linked-list-cycle": {
    id: "linked-list-cycle",
    title: "Linked List Cycle",
    difficulty: "Easy",
    category: "Linked List • Two Pointers",
    description: {
      text: "Given head, the head of a linked list, determine if the linked list has a cycle in it.",
      notes: [
        "There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.",
        "Return true if there is a cycle in the linked list. Otherwise, return false.",
      ],
    },
    examples: [
      {
        input: "head = [3,2,0,-4], pos = 1",
        output: "true",
        explanation:
          "There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).",
      },
      {
        input: "head = [1,2], pos = 0",
        output: "true",
      },
      {
        input: "head = [1], pos = -1",
        output: "false",
      },
    ],
    constraints: [
      "The number of the nodes in the list is in the range [0, 10⁴]",
      "-10⁵ ≤ Node.val ≤ 10⁵",
      "pos is -1 or a valid index in the linked-list",
    ],
    starterCode: {
      javascript: `function ListNode(val) {
  this.val = val;
  this.next = null;
}

function hasCycle(head) {
  // Write your solution here

}

// Test cases
let head1 = new ListNode(3);
head1.next = new ListNode(2);
head1.next.next = new ListNode(0);
head1.next.next.next = new ListNode(-4);
head1.next.next.next.next = head1.next; // cycle

console.log(hasCycle(head1)); // Expected: true

let head2 = new ListNode(1);
head2.next = new ListNode(2);
head2.next.next = head2; // cycle

console.log(hasCycle(head2)); // Expected: true

let head3 = new ListNode(1);
console.log(hasCycle(head3)); // Expected: false`,
      python: `class ListNode:
    def __init__(self, val=0):
        self.val = val
        self.next = None

def hasCycle(head):
    # Write your solution here
    pass

# Test cases
head1 = ListNode(3)
head1.next = ListNode(2)
head1.next.next = ListNode(0)
head1.next.next.next = ListNode(-4)
head1.next.next.next.next = head1.next

print(hasCycle(head1))  # Expected: True

head2 = ListNode(1)
head2.next = ListNode(2)
head2.next.next = head2

print(hasCycle(head2))  # Expected: True

head3 = ListNode(1)
print(hasCycle(head3))  # Expected: False`,
      java: `class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

class Solution {
    public static boolean hasCycle(ListNode head) {
        // Write your solution here

        return false;
    }

    public static void main(String[] args) {
        ListNode head1 = new ListNode(3);
        head1.next = new ListNode(2);
        head1.next.next = new ListNode(0);
        head1.next.next.next = new ListNode(-4);
        head1.next.next.next.next = head1.next;

        System.out.println(hasCycle(head1)); // Expected: true

        ListNode head2 = new ListNode(1);
        head2.next = new ListNode(2);
        head2.next.next = head2;

        System.out.println(hasCycle(head2)); // Expected: true

        ListNode head3 = new ListNode(1);
        System.out.println(hasCycle(head3)); // Expected: false
    }
}`,
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(NULL) {}
};

bool hasCycle(ListNode* head) {
    // Write your solution here
    return false;
}

int main() {
    ListNode* head1 = new ListNode(3);
    head1->next = new ListNode(2);
    head1->next->next = new ListNode(0);
    head1->next->next->next = new ListNode(-4);
    head1->next->next->next->next = head1->next;

    cout << boolalpha << hasCycle(head1) << endl;

    ListNode* head2 = new ListNode(1);
    head2->next = new ListNode(2);
    head2->next->next = head2;

    cout << boolalpha << hasCycle(head2) << endl;

    ListNode* head3 = new ListNode(1);
    cout << boolalpha << hasCycle(head3) << endl;
}`,
      csharp: `using System;

public class ListNode {
    public int val;
    public ListNode next;
    public ListNode(int val=0) {
        this.val = val;
        this.next = null;
    }
}

class Solution {
    public static bool HasCycle(ListNode head) {
        // Write your solution here
        return false;
    }

    static void Main() {
        ListNode head1 = new ListNode(3);
        head1.next = new ListNode(2);
        head1.next.next = new ListNode(0);
        head1.next.next.next = new ListNode(-4);
        head1.next.next.next.next = head1.next;

        Console.WriteLine(HasCycle(head1));

        ListNode head2 = new ListNode(1);
        head2.next = new ListNode(2);
        head2.next.next = head2;

        Console.WriteLine(HasCycle(head2));

        ListNode head3 = new ListNode(1);
        Console.WriteLine(HasCycle(head3));
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

int hasCycle(struct ListNode* head) {
    // Write your solution here
    return 0;
}

int main() {
    struct ListNode* head1 = (struct ListNode*)malloc(sizeof(struct ListNode));
    head1->val = 3;
    head1->next = (struct ListNode*)malloc(sizeof(struct ListNode));
    head1->next->val = 2;
    head1->next->next = (struct ListNode*)malloc(sizeof(struct ListNode));
    head1->next->next->val = 0;
    head1->next->next->next = (struct ListNode*)malloc(sizeof(struct ListNode));
    head1->next->next->next->val = -4;
    head1->next->next->next->next = head1->next;

    printf("%s\n", hasCycle(head1) ? "true" : "false");

    struct ListNode* head2 = (struct ListNode*)malloc(sizeof(struct ListNode));
    head2->val = 1;
    head2->next = (struct ListNode*)malloc(sizeof(struct ListNode));
    head2->next->val = 2;
    head2->next->next = head2;

    printf("%s\n", hasCycle(head2) ? "true" : "false");

    struct ListNode* head3 = (struct ListNode*)malloc(sizeof(struct ListNode));
    head3->val = 1;
    head3->next = NULL;

    printf("%s\n", hasCycle(head3) ? "true" : "false");

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\ntrue\nfalse",
      python: "True\nTrue\nFalse",
      java: "true\ntrue\nfalse",
      cpp: "true\ntrue\nfalse",
      csharp: "true\ntrue\nfalse",
      c: "true\ntrue\nfalse",
    },
  },
  "reorder-list": {
    id: "reorder-list",
    title: "Reorder List",
    difficulty: "Medium",
    category: "Linked List • Two Pointers • Stack",
    description: {
      text: "You are given the head of a singly linked-list. The list can be represented as:",
      notes: [
        "L0 → L1 → … → Ln - 1 → Ln",
        "Reorder the list to be on the following form:",
        "L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …",
        "You may not modify the values in the list's nodes. Only nodes themselves may be changed.",
      ],
    },
    examples: [
      {
        input: "head = [1,2,3,4]",
        output: "[1,4,2,3]",
      },
      {
        input: "head = [1,2,3,4,5]",
        output: "[1,5,2,4,3]",
      },
    ],
    constraints: [
      "The number of nodes in the list is in the range [1, 5 * 10⁴]",
      "1 ≤ Node.val ≤ 1000",
    ],
    starterCode: {
      javascript: `function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function reorderList(head) {
  // Write your solution here

}

// Test cases
let head = new ListNode(1,
  new ListNode(2,
    new ListNode(3,
      new ListNode(4)
    )
  )
);

reorderList(head);
while (head) {
  console.log(head.val);
  head = head.next;
}`,
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reorderList(head):
    # Write your solution here
    pass

# Test cases
head = ListNode(1,
    ListNode(2,
        ListNode(3,
            ListNode(4)
        )
    )
)

reorderList(head)
while head:
    print(head.val)
    head = head.next`,
      java: `class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class Solution {
    public static void reorderList(ListNode head) {
        // Write your solution here
    }

    public static void main(String[] args) {
        ListNode head = new ListNode(1,
            new ListNode(2,
                new ListNode(3,
                    new ListNode(4)
                )
            )
        );

        reorderList(head);
        while (head != null) {
            System.out.println(head.val);
            head = head.next;
        }
    }
}`,
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(NULL) {}
};

void reorderList(ListNode* head) {
    // Write your solution here
}

int main() {
    ListNode* head = new ListNode(1);
    head->next = new ListNode(2);
    head->next->next = new ListNode(3);
    head->next->next->next = new ListNode(4);

    reorderList(head);
    while (head) {
        cout << head->val << endl;
        head = head->next;
    }
}`,
      csharp: `using System;

public class ListNode {
    public int val;
    public ListNode next;
    public ListNode(int val=0, ListNode next=null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    public static void ReorderList(ListNode head) {
        // Write your solution here
    }

    static void Main() {
        ListNode head = new ListNode(1,
            new ListNode(2,
                new ListNode(3,
                    new ListNode(4)
                )
            )
        );

        ReorderList(head);
        while (head != null) {
            Console.WriteLine(head.val);
            head = head.next;
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

void reorderList(struct ListNode* head) {
    // Write your solution here
}

int main() {
    struct ListNode* head = (struct ListNode*)malloc(sizeof(struct ListNode));
    head->val = 1;
    head->next = (struct ListNode*)malloc(sizeof(struct ListNode));
    head->next->val = 2;
    head->next->next = (struct ListNode*)malloc(sizeof(struct ListNode));
    head->next->next->val = 3;
    head->next->next->next = (struct ListNode*)malloc(sizeof(struct ListNode));
    head->next->next->next->val = 4;
    head->next->next->next->next = NULL;

    reorderList(head);
    while (head != NULL) {
        printf("%d\n", head->val);
        head = head->next;
    }

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "1\n4\n2\n3",
      python: "1\n4\n2\n3",
      java: "1\n4\n2\n3",
      cpp: "1\n4\n2\n3",
      csharp: "1\n4\n2\n3",
      c: "1\n4\n2\n3",
    },
  },
  "remove-nth-node-from-end-of-list": {
    id: "remove-nth-node-from-end-of-list",
    title: "Remove Nth Node From End of List",
    difficulty: "Medium",
    category: "Linked List • Two Pointers",
    description: {
      text: "Given the head of a linked list, remove the nth node from the end of the list and return its head.",
      notes: [],
    },
    examples: [
      {
        input: "head = [1,2,3,4,5], n = 2",
        output: "[1,2,3,5]",
      },
      {
        input: "head = [1], n = 1",
        output: "[]",
      },
      {
        input: "head = [1,2], n = 1",
        output: "[1]",
      },
    ],
    constraints: [
      "The number of nodes in the list is sz",
      "1 ≤ sz ≤ 30",
      "0 ≤ Node.val ≤ 100",
      "1 ≤ n ≤ sz",
    ],
    starterCode: {
      javascript: `function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function removeNthFromEnd(head, n) {
  // Write your solution here

}

// Test cases
let head = new ListNode(1,
  new ListNode(2,
    new ListNode(3,
      new ListNode(4,
        new ListNode(5)
      )
    )
  )
);

let res = removeNthFromEnd(head, 2);
while (res) {
  console.log(res.val);
  res = res.next;
}`,
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def removeNthFromEnd(head, n):
    # Write your solution here
    pass

# Test cases
head = ListNode(1,
    ListNode(2,
        ListNode(3,
            ListNode(4,
                ListNode(5)
            )
        )
    )
)

res = removeNthFromEnd(head, 2)
while res:
    print(res.val)
    res = res.next`,
      java: `class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class Solution {
    public static ListNode removeNthFromEnd(ListNode head, int n) {
        // Write your solution here
        return null;
    }

    public static void main(String[] args) {
        ListNode head = new ListNode(1,
            new ListNode(2,
                new ListNode(3,
                    new ListNode(4,
                        new ListNode(5)
                    )
                )
            )
        );

        ListNode res = removeNthFromEnd(head, 2);
        while (res != null) {
            System.out.println(res.val);
            res = res.next;
        }
    }
}`,
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(NULL) {}
};

ListNode* removeNthFromEnd(ListNode* head, int n) {
    // Write your solution here
    return NULL;
}

int main() {
    ListNode* head = new ListNode(1);
    head->next = new ListNode(2);
    head->next->next = new ListNode(3);
    head->next->next->next = new ListNode(4);
    head->next->next->next->next = new ListNode(5);

    ListNode* res = removeNthFromEnd(head, 2);
    while (res) {
        cout << res->val << endl;
        res = res->next;
    }
}`,
      csharp: `using System;

public class ListNode {
    public int val;
    public ListNode next;
    public ListNode(int val=0, ListNode next=null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    public static ListNode RemoveNthFromEnd(ListNode head, int n) {
        // Write your solution here
        return null;
    }

    static void Main() {
        ListNode head = new ListNode(1,
            new ListNode(2,
                new ListNode(3,
                    new ListNode(4,
                        new ListNode(5)
                    )
                )
            )
        );

        var res = RemoveNthFromEnd(head, 2);
        while (res != null) {
            Console.WriteLine(res.val);
            res = res.next;
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

struct ListNode* removeNthFromEnd(struct ListNode* head, int n) {
    // Write your solution here
    return NULL;
}

int main() {
    struct ListNode* head = (struct ListNode*)malloc(sizeof(struct ListNode));
    head->val = 1;
    head->next = (struct ListNode*)malloc(sizeof(struct ListNode));
    head->next->val = 2;
    head->next->next = (struct ListNode*)malloc(sizeof(struct ListNode));
    head->next->next->val = 3;
    head->next->next->next = (struct ListNode*)malloc(sizeof(struct ListNode));
    head->next->next->next->val = 4;
    head->next->next->next->next = (struct ListNode*)malloc(sizeof(struct ListNode));
    head->next->next->next->next->val = 5;
    head->next->next->next->next->next = NULL;

    struct ListNode* res = removeNthFromEnd(head, 2);
    while (res != NULL) {
        printf("%d\n", res->val);
        res = res->next;
    }

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "1\n2\n3\n5",
      python: "1\n2\n3\n5",
      java: "1\n2\n3\n5",
      cpp: "1\n2\n3\n5",
      csharp: "1\n2\n3\n5",
      c: "1\n2\n3\n5",
    },
  },
  "copy-list-with-random-pointer": {
    id: "copy-list-with-random-pointer",
    title: "Copy List With Random Pointer",
    difficulty: "Medium",
    category: "Linked List • Hash Table",
    description: {
      text: "A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.",
      notes: [
        "Construct a deep copy of the list.",
        "The deep copy should consist of exactly n brand new nodes.",
        "Each new node's value should be equal to the value of its corresponding original node.",
        "Both the next and random pointers of the new nodes should point to new nodes in the copied list.",
        "None of the pointers in the new list should point to nodes in the original list.",
      ],
    },
    examples: [
      {
        input: "head = [[7,null],[13,0],[11,4],[10,2],[1,0]]",
        output: "[[7,null],[13,0],[11,4],[10,2],[1,0]]",
      },
      {
        input: "head = [[1,1],[2,1]]",
        output: "[[1,1],[2,1]]",
      },
      {
        input: "head = [[3,null],[3,0],[3,null]]",
        output: "[[3,null],[3,0],[3,null]]",
      },
    ],
    constraints: [
      "0 ≤ n ≤ 1000",
      "-10⁴ ≤ Node.val ≤ 10⁴",
      "Node.random is null or pointing to some node in the linked list",
    ],
    starterCode: {
      javascript: `function Node(val, next = null, random = null) {
  this.val = val;
  this.next = next;
  this.random = random;
}

function copyRandomList(head) {
  // Write your solution here

}

// Note: Test cases for random pointers are complex to print directly`,
      python: `class Node:
    def __init__(self, val, next=None, random=None):
        self.val = val
        self.next = next
        self.random = random

def copyRandomList(head):
    # Write your solution here
    pass

# Note: Printing random pointers requires custom traversal`,
      java: `class Node {
    int val;
    Node next;
    Node random;

    public Node(int val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}

class Solution {
    public static Node copyRandomList(Node head) {
        // Write your solution here
        return null;
    }
}`,
      cpp: `#include <iostream>
using namespace std;

class Node {
public:
    int val;
    Node* next;
    Node* random;

    Node(int _val) {
        val = _val;
        next = NULL;
        random = NULL;
    }
};

Node* copyRandomList(Node* head) {
    // Write your solution here
    return NULL;
}`,
      csharp: `using System;

public class Node {
    public int val;
    public Node next;
    public Node random;

    public Node(int _val) {
        val = _val;
        next = null;
        random = null;
    }
}

class Solution {
    public static Node CopyRandomList(Node head) {
        // Write your solution here
        return null;
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int val;
    struct Node* next;
    struct Node* random;
};

struct Node* copyRandomList(struct Node* head) {
    // Write your solution here
    return NULL;
}`,
    },
    expectedOutput: {
      javascript: "Deep copied list",
      python: "Deep copied list",
      java: "Deep copied list",
      cpp: "Deep copied list",
      csharp: "Deep copied list",
      c: "Deep copied list",
    },
  },
  "add-two-numbers": {
    id: "add-two-numbers",
    title: "Add Two Numbers",
    difficulty: "Medium",
    category: "Linked List • Math",
    description: {
      text: "You are given two non-empty linked lists representing two non-negative integers.",
      notes: [
        "The digits are stored in reverse order, and each of their nodes contains a single digit.",
        "Add the two numbers and return the sum as a linked list.",
        "You may assume the two numbers do not contain any leading zero, except the number 0 itself.",
      ],
    },
    examples: [
      {
        input: "l1 = [2,4,3], l2 = [5,6,4]",
        output: "[7,0,8]",
        explanation: "342 + 465 = 807.",
      },
      {
        input: "l1 = [0], l2 = [0]",
        output: "[0]",
      },
      {
        input: "l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]",
        output: "[8,9,9,9,0,0,0,1]",
      },
    ],
    constraints: [
      "The number of nodes in each linked list is in the range [1, 100]",
      "0 ≤ Node.val ≤ 9",
      "It is guaranteed that the list represents a number that does not have leading zeros",
    ],
    starterCode: {
      javascript: `function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function addTwoNumbers(l1, l2) {
  // Write your solution here

}

// Test cases
let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

let res = addTwoNumbers(l1, l2);
while (res) {
  console.log(res.val);
  res = res.next;
}`,
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def addTwoNumbers(l1, l2):
    # Write your solution here
    pass

# Test cases
l1 = ListNode(2, ListNode(4, ListNode(3)))
l2 = ListNode(5, ListNode(6, ListNode(4)))

res = addTwoNumbers(l1, l2)
while res:
    print(res.val)
    res = res.next`,
      java: `class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class Solution {
    public static ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        // Write your solution here
        return null;
    }

    public static void main(String[] args) {
        ListNode l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
        ListNode l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

        ListNode res = addTwoNumbers(l1, l2);
        while (res != null) {
            System.out.println(res.val);
            res = res.next;
        }
    }
}`,
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(NULL) {}
};

ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
    // Write your solution here
    return NULL;
}

int main() {
    ListNode* l1 = new ListNode(2);
    l1->next = new ListNode(4);
    l1->next->next = new ListNode(3);

    ListNode* l2 = new ListNode(5);
    l2->next = new ListNode(6);
    l2->next->next = new ListNode(4);

    ListNode* res = addTwoNumbers(l1, l2);
    while (res) {
        cout << res->val << endl;
        res = res->next;
    }
}`,
      csharp: `using System;

public class ListNode {
    public int val;
    public ListNode next;
    public ListNode(int val=0, ListNode next=null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    public static ListNode AddTwoNumbers(ListNode l1, ListNode l2) {
        // Write your solution here
        return null;
    }

    static void Main() {
        ListNode l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
        ListNode l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

        var res = AddTwoNumbers(l1, l2);
        while (res != null) {
            Console.WriteLine(res.val);
            res = res.next;
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {
    // Write your solution here
    return NULL;
}

int main() {
    struct ListNode* l1 = (struct ListNode*)malloc(sizeof(struct ListNode));
    l1->val = 2;
    l1->next = (struct ListNode*)malloc(sizeof(struct ListNode));
    l1->next->val = 4;
    l1->next->next = (struct ListNode*)malloc(sizeof(struct ListNode));
    l1->next->next->val = 3;
    l1->next->next->next = NULL;

    struct ListNode* l2 = (struct ListNode*)malloc(sizeof(struct ListNode));
    l2->val = 5;
    l2->next = (struct ListNode*)malloc(sizeof(struct ListNode));
    l2->next->val = 6;
    l2->next->next = (struct ListNode*)malloc(sizeof(struct ListNode));
    l2->next->next->val = 4;
    l2->next->next->next = NULL;

    struct ListNode* res = addTwoNumbers(l1, l2);
    while (res != NULL) {
        printf("%d\n", res->val);
        res = res->next;
    }

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "7\n0\n8",
      python: "7\n0\n8",
      java: "7\n0\n8",
      cpp: "7\n0\n8",
      csharp: "7\n0\n8",
      c: "7\n0\n8",
    },
  },
  "find-the-duplicate-number": {
    id: "find-the-duplicate-number",
    title: "Find the Duplicate Number",
    difficulty: "Medium",
    category: "Array • Two Pointers • Binary Search",
    description: {
      text: "Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.",
      notes: [
        "There is only one repeated number in nums, return this repeated number.",
        "You must solve the problem without modifying the array nums and using only constant extra space.",
      ],
    },
    examples: [
      {
        input: "nums = [1,3,4,2,2]",
        output: "2",
      },
      {
        input: "nums = [3,1,3,4,2]",
        output: "3",
      },
      {
        input: "nums = [3,3,3,3,3]",
        output: "3",
      },
    ],
    constraints: [
      "1 ≤ n ≤ 10⁵",
      "nums.length == n + 1",
      "1 ≤ nums[i] ≤ n",
      "All the integers in nums appear only once except for precisely one integer which appears two or more times",
    ],
    starterCode: {
      javascript: `function findDuplicate(nums) {
  // Write your solution here

}

// Test cases
console.log(findDuplicate([1,3,4,2,2])); // Expected: 2
console.log(findDuplicate([3,1,3,4,2])); // Expected: 3
console.log(findDuplicate([3,3,3,3,3])); // Expected: 3`,
      python: `def findDuplicate(nums):
    # Write your solution here
    pass

# Test cases
print(findDuplicate([1,3,4,2,2]))  # Expected: 2
print(findDuplicate([3,1,3,4,2]))  # Expected: 3
print(findDuplicate([3,3,3,3,3]))  # Expected: 3`,
      java: `class Solution {
    public static int findDuplicate(int[] nums) {
        // Write your solution here

        return 0;
    }

    public static void main(String[] args) {
        System.out.println(findDuplicate(new int[]{1,3,4,2,2})); // Expected: 2
        System.out.println(findDuplicate(new int[]{3,1,3,4,2})); // Expected: 3
        System.out.println(findDuplicate(new int[]{3,3,3,3,3})); // Expected: 3
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int findDuplicate(vector<int>& nums) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> v1 = {1,3,4,2,2};
    vector<int> v2 = {3,1,3,4,2};
    vector<int> v3 = {3,3,3,3,3};

    cout << findDuplicate(v1) << endl;
    cout << findDuplicate(v2) << endl;
    cout << findDuplicate(v3) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int FindDuplicate(int[] nums) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(FindDuplicate(new int[]{1,3,4,2,2}));
        Console.WriteLine(FindDuplicate(new int[]{3,1,3,4,2}));
        Console.WriteLine(FindDuplicate(new int[]{3,3,3,3,3}));
    }
}`,
      c: `#include <stdio.h>

int findDuplicate(int nums[], int n) {
    // Write your solution here
    return 0;
}

int main() {
    int a1[] = {1,3,4,2,2};
    int a2[] = {3,1,3,4,2};
    int a3[] = {3,3,3,3,3};

    printf("%d\n", findDuplicate(a1, 5));
    printf("%d\n", findDuplicate(a2, 5));
    printf("%d\n", findDuplicate(a3, 5));

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "2\n3\n3",
      python: "2\n3\n3",
      java: "2\n3\n3",
      cpp: "2\n3\n3",
      csharp: "2\n3\n3",
      c: "2\n3\n3",
    },
  },
  "lru-cache": {
    id: "lru-cache",
    title: "LRU Cache",
    difficulty: "Medium",
    category: "Hash Table • Linked List • Design",
    description: {
      text: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
      notes: [
        "Implement the LRUCache class:",
        "LRUCache(int capacity) Initialize the LRU cache with positive size capacity.",
        "int get(int key) Return the value of the key if the key exists, otherwise return -1.",
        "void put(int key, int value) Update the value of the key if the key exists.",
        "Otherwise, add the key-value pair to the cache.",
        "If the number of keys exceeds the capacity from this operation, evict the least recently used key.",
        "The functions get and put must each run in O(1) average time complexity.",
      ],
    },
    examples: [
      {
        input:
          '["LRUCache","put","put","get","put","get","put","get","get","get"]\n[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]',
        output: "[null,null,null,1,null,-1,null,-1,3,4]",
      },
    ],
    constraints: [
      "1 ≤ capacity ≤ 3000",
      "0 ≤ key ≤ 10⁴",
      "0 ≤ value ≤ 10⁵",
      "At most 2 * 10⁵ calls will be made to get and put",
    ],
    starterCode: {
      javascript: `class LRUCache {
  constructor(capacity) {
    
  }

  get(key) {
    // Write your solution here
  }

  put(key, value) {
    // Write your solution here
  }
}

// Test cases
const lRUCache = new LRUCache(2);
lRUCache.put(1, 1);
lRUCache.put(2, 2);
console.log(lRUCache.get(1)); // Expected: 1
lRUCache.put(3, 3);
console.log(lRUCache.get(2)); // Expected: -1
lRUCache.put(4, 4);
console.log(lRUCache.get(1)); // Expected: -1
console.log(lRUCache.get(3)); // Expected: 3
console.log(lRUCache.get(4)); // Expected: 4`,
      python: `class LRUCache:
    def __init__(self, capacity):
        pass

    def get(self, key):
        # Write your solution here
        pass

    def put(self, key, value):
        # Write your solution here
        pass

# Test cases
lRUCache = LRUCache(2)
lRUCache.put(1, 1)
lRUCache.put(2, 2)
print(lRUCache.get(1))  # Expected: 1
lRUCache.put(3, 3)
print(lRUCache.get(2))  # Expected: -1
lRUCache.put(4, 4)
print(lRUCache.get(1))  # Expected: -1
print(lRUCache.get(3))  # Expected: 3
print(lRUCache.get(4))  # Expected: 4`,
      java: `import java.util.*;

class LRUCache {
    public LRUCache(int capacity) {
        
    }

    public int get(int key) {
        // Write your solution here
        return -1;
    }

    public void put(int key, int value) {
        // Write your solution here
    }

    public static void main(String[] args) {
        LRUCache lRUCache = new LRUCache(2);
        lRUCache.put(1, 1);
        lRUCache.put(2, 2);
        System.out.println(lRUCache.get(1)); // Expected: 1
        lRUCache.put(3, 3);
        System.out.println(lRUCache.get(2)); // Expected: -1
        lRUCache.put(4, 4);
        System.out.println(lRUCache.get(1)); // Expected: -1
        System.out.println(lRUCache.get(3)); // Expected: 3
        System.out.println(lRUCache.get(4)); // Expected: 4
    }
}`,
      cpp: `#include <iostream>
using namespace std;

class LRUCache {
public:
    LRUCache(int capacity) {
        
    }

    int get(int key) {
        // Write your solution here
        return -1;
    }

    void put(int key, int value) {
        // Write your solution here
    }
};

int main() {
    LRUCache lRUCache(2);
    lRUCache.put(1, 1);
    lRUCache.put(2, 2);
    cout << lRUCache.get(1) << endl;
    lRUCache.put(3, 3);
    cout << lRUCache.get(2) << endl;
    lRUCache.put(4, 4);
    cout << lRUCache.get(1) << endl;
    cout << lRUCache.get(3) << endl;
    cout << lRUCache.get(4) << endl;
}`,
      csharp: `using System;

class LRUCache {
    public LRUCache(int capacity) {
        
    }

    public int Get(int key) {
        // Write your solution here
        return -1;
    }

    public void Put(int key, int value) {
        // Write your solution here
    }

    static void Main() {
        LRUCache lRUCache = new LRUCache(2);
        lRUCache.Put(1, 1);
        lRUCache.Put(2, 2);
        Console.WriteLine(lRUCache.Get(1));
        lRUCache.Put(3, 3);
        Console.WriteLine(lRUCache.Get(2));
        lRUCache.Put(4, 4);
        Console.WriteLine(lRUCache.Get(1));
        Console.WriteLine(lRUCache.Get(3));
        Console.WriteLine(lRUCache.Get(4));
    }
}`,
      c: `#include <stdio.h>

typedef struct {
    // Write your solution here
} LRUCache;

LRUCache* lRUCacheCreate(int capacity) {
    // Write your solution here
    return NULL;
}

int lRUCacheGet(LRUCache* obj, int key) {
    // Write your solution here
    return -1;
}

void lRUCachePut(LRUCache* obj, int key, int value) {
    // Write your solution here
}

int main() {
    LRUCache* lRUCache = lRUCacheCreate(2);
    lRUCachePut(lRUCache, 1, 1);
    lRUCachePut(lRUCache, 2, 2);
    printf("%d\n", lRUCacheGet(lRUCache, 1));
    lRUCachePut(lRUCache, 3, 3);
    printf("%d\n", lRUCacheGet(lRUCache, 2));
    lRUCachePut(lRUCache, 4, 4);
    printf("%d\n", lRUCacheGet(lRUCache, 1));
    printf("%d\n", lRUCacheGet(lRUCache, 3));
    printf("%d\n", lRUCacheGet(lRUCache, 4));
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "1\n-1\n-1\n3\n4",
      python: "1\n-1\n-1\n3\n4",
      java: "1\n-1\n-1\n3\n4",
      cpp: "1\n-1\n-1\n3\n4",
      csharp: "1\n-1\n-1\n3\n4",
      c: "1\n-1\n-1\n3\n4",
    },
  },
  "merge-k-sorted-lists": {
    id: "merge-k-sorted-lists",
    title: "Merge K Sorted Lists",
    difficulty: "Hard",
    category: "Linked List • Divide and Conquer • Heap (Priority Queue)",
    description: {
      text: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.",
      notes: [
        "Merge all the linked-lists into one sorted linked-list and return it.",
      ],
    },
    examples: [
      {
        input: "lists = [[1,4,5],[1,3,4],[2,6]]",
        output: "[1,1,2,3,4,4,5,6]",
      },
      {
        input: "lists = []",
        output: "[]",
      },
      {
        input: "lists = [[]]",
        output: "[]",
      },
    ],
    constraints: [
      "k == lists.length",
      "0 ≤ k ≤ 10⁴",
      "0 ≤ lists[i].length ≤ 500",
      "-10⁴ ≤ lists[i][j] ≤ 10⁴",
      "lists[i] is sorted in ascending order",
      "The sum of lists[i].length will not exceed 10⁴",
    ],
    starterCode: {
      javascript: `function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function mergeKLists(lists) {
  // Write your solution here

}

// Test cases
let l1 = new ListNode(1, new ListNode(4, new ListNode(5)));
let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
let l3 = new ListNode(2, new ListNode(6));

let res = mergeKLists([l1, l2, l3]);
while (res) {
  console.log(res.val);
  res = res.next;
}`,
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def mergeKLists(lists):
    # Write your solution here
    pass

# Test cases
l1 = ListNode(1, ListNode(4, ListNode(5)))
l2 = ListNode(1, ListNode(3, ListNode(4)))
l3 = ListNode(2, ListNode(6))

res = mergeKLists([l1, l2, l3])
while res:
    print(res.val)
    res = res.next`,
      java: `class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class Solution {
    public static ListNode mergeKLists(ListNode[] lists) {
        // Write your solution here
        return null;
    }

    public static void main(String[] args) {
        ListNode l1 = new ListNode(1, new ListNode(4, new ListNode(5)));
        ListNode l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
        ListNode l3 = new ListNode(2, new ListNode(6));

        ListNode res = mergeKLists(new ListNode[]{l1, l2, l3});
        while (res != null) {
            System.out.println(res.val);
            res = res.next;
        }
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(NULL) {}
};

ListNode* mergeKLists(vector<ListNode*>& lists) {
    // Write your solution here
    return NULL;
}

int main() {
    ListNode* l1 = new ListNode(1);
    l1->next = new ListNode(4);
    l1->next->next = new ListNode(5);

    ListNode* l2 = new ListNode(1);
    l2->next = new ListNode(3);
    l2->next->next = new ListNode(4);

    ListNode* l3 = new ListNode(2);
    l3->next = new ListNode(6);

    vector<ListNode*> lists = {l1, l2, l3};
    ListNode* res = mergeKLists(lists);

    while (res) {
        cout << res->val << endl;
        res = res->next;
    }
}`,
      csharp: `using System;

public class ListNode {
    public int val;
    public ListNode next;
    public ListNode(int val=0, ListNode next=null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    public static ListNode MergeKLists(ListNode[] lists) {
        // Write your solution here
        return null;
    }

    static void Main() {
        ListNode l1 = new ListNode(1, new ListNode(4, new ListNode(5)));
        ListNode l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
        ListNode l3 = new ListNode(2, new ListNode(6));

        var res = MergeKLists(new ListNode[]{l1, l2, l3});
        while (res != null) {
            Console.WriteLine(res.val);
            res = res.next;
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

struct ListNode* mergeKLists(struct ListNode** lists, int listsSize) {
    // Write your solution here
    return NULL;
}

int main() {
    struct ListNode* l1 = (struct ListNode*)malloc(sizeof(struct ListNode));
    l1->val = 1;
    l1->next = (struct ListNode*)malloc(sizeof(struct ListNode));
    l1->next->val = 4;
    l1->next->next = (struct ListNode*)malloc(sizeof(struct ListNode));
    l1->next->next->val = 5;
    l1->next->next->next = NULL;

    struct ListNode* l2 = (struct ListNode*)malloc(sizeof(struct ListNode));
    l2->val = 1;
    l2->next = (struct ListNode*)malloc(sizeof(struct ListNode));
    l2->next->val = 3;
    l2->next->next = (struct ListNode*)malloc(sizeof(struct ListNode));
    l2->next->next->val = 4;
    l2->next->next->next = NULL;

    struct ListNode* l3 = (struct ListNode*)malloc(sizeof(struct ListNode));
    l3->val = 2;
    l3->next = (struct ListNode*)malloc(sizeof(struct ListNode));
    l3->next->val = 6;
    l3->next->next = NULL;

    struct ListNode* lists[3] = {l1, l2, l3};
    struct ListNode* res = mergeKLists(lists, 3);

    while (res != NULL) {
        printf("%d\n", res->val);
        res = res->next;
    }

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "1\n1\n2\n3\n4\n4\n5\n6",
      python: "1\n1\n2\n3\n4\n4\n5\n6",
      java: "1\n1\n2\n3\n4\n4\n5\n6",
      cpp: "1\n1\n2\n3\n4\n4\n5\n6",
      csharp: "1\n1\n2\n3\n4\n4\n5\n6",
      c: "1\n1\n2\n3\n4\n4\n5\n6",
    },
  },
  "reverse-nodes-in-k-group": {
    id: "reverse-nodes-in-k-group",
    title: "Reverse Nodes in k-Group",
    difficulty: "Hard",
    category: "Linked List • Recursion",
    description: {
      text: "Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.",
      notes: [
        "k is a positive integer and is less than or equal to the length of the linked list.",
        "If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.",
        "You may not alter the values in the list's nodes, only nodes themselves may be changed.",
      ],
    },
    examples: [
      {
        input: "head = [1,2,3,4,5], k = 2",
        output: "[2,1,4,3,5]",
      },
      {
        input: "head = [1,2,3,4,5], k = 3",
        output: "[3,2,1,4,5]",
      },
    ],
    constraints: [
      "The number of nodes in the list is n",
      "1 ≤ k ≤ n ≤ 5000",
      "0 ≤ Node.val ≤ 1000",
    ],
    starterCode: {
      javascript: `function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function reverseKGroup(head, k) {
  // Write your solution here

}

// Test cases
let head = new ListNode(1,
  new ListNode(2,
    new ListNode(3,
      new ListNode(4,
        new ListNode(5)
      )
    )
  )
);

let res = reverseKGroup(head, 2);
while (res) {
  console.log(res.val);
  res = res.next;
}`,
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverseKGroup(head, k):
    # Write your solution here
    pass

# Test cases
head = ListNode(1,
    ListNode(2,
        ListNode(3,
            ListNode(4,
                ListNode(5)
            )
        )
    )
)

res = reverseKGroup(head, 2)
while res:
    print(res.val)
    res = res.next`,
      java: `class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class Solution {
    public static ListNode reverseKGroup(ListNode head, int k) {
        // Write your solution here
        return null;
    }

    public static void main(String[] args) {
        ListNode head = new ListNode(1,
            new ListNode(2,
                new ListNode(3,
                    new ListNode(4,
                        new ListNode(5)
                    )
                )
            )
        );

        ListNode res = reverseKGroup(head, 2);
        while (res != null) {
            System.out.println(res.val);
            res = res.next;
        }
    }
}`,
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(NULL) {}
};

ListNode* reverseKGroup(ListNode* head, int k) {
    // Write your solution here
    return NULL;
}

int main() {
    ListNode* head = new ListNode(1);
    head->next = new ListNode(2);
    head->next->next = new ListNode(3);
    head->next->next->next = new ListNode(4);
    head->next->next->next->next = new ListNode(5);

    ListNode* res = reverseKGroup(head, 2);
    while (res) {
        cout << res->val << endl;
        res = res->next;
    }
}`,
      csharp: `using System;

public class ListNode {
    public int val;
    public ListNode next;
    public ListNode(int val=0, ListNode next=null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    public static ListNode ReverseKGroup(ListNode head, int k) {
        // Write your solution here
        return null;
    }

    static void Main() {
        ListNode head = new ListNode(1,
            new ListNode(2,
                new ListNode(3,
                    new ListNode(4,
                        new ListNode(5)
                    )
                )
            )
        );

        var res = ReverseKGroup(head, 2);
        while (res != null) {
            Console.WriteLine(res.val);
            res = res.next;
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

struct ListNode* reverseKGroup(struct ListNode* head, int k) {
    // Write your solution here
    return NULL;
}

int main() {
    struct ListNode* head = (struct ListNode*)malloc(sizeof(struct ListNode));
    head->val = 1;
    head->next = (struct ListNode*)malloc(sizeof(struct ListNode));
    head->next->val = 2;
    head->next->next = (struct ListNode*)malloc(sizeof(struct ListNode));
    head->next->next->val = 3;
    head->next->next->next = (struct ListNode*)malloc(sizeof(struct ListNode));
    head->next->next->next->val = 4;
    head->next->next->next->next = (struct ListNode*)malloc(sizeof(struct ListNode));
    head->next->next->next->next->val = 5;
    head->next->next->next->next->next = NULL;

    struct ListNode* res = reverseKGroup(head, 2);
    while (res != NULL) {
        printf("%d\n", res->val);
        res = res->next;
    }

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "2\n1\n4\n3\n5",
      python: "2\n1\n4\n3\n5",
      java: "2\n1\n4\n3\n5",
      cpp: "2\n1\n4\n3\n5",
      csharp: "2\n1\n4\n3\n5",
      c: "2\n1\n4\n3\n5",
    },
  },

  //Trees
  "invert-binary-tree": {
    id: "invert-binary-tree",
    title: "Invert Binary Tree",
    difficulty: "Easy",
    category: "Tree • Depth-First Search • Breadth-First Search",
    description: {
      text: "Given the root of a binary tree, invert the tree, and return its root.",
      notes: [],
    },
    examples: [
      {
        input: "root = [4,2,7,1,3,6,9]",
        output: "[4,7,2,9,6,3,1]",
      },
      {
        input: "root = [2,1,3]",
        output: "[2,3,1]",
      },
      {
        input: "root = []",
        output: "[]",
      },
    ],
    constraints: [
      "The number of nodes in the tree is in the range [0, 100]",
      "-100 ≤ Node.val ≤ 100",
    ],
    starterCode: {
      javascript: `function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function invertTree(root) {
  // Write your solution here

}

// Test cases
let root = new TreeNode(4,
  new TreeNode(2,
    new TreeNode(1),
    new TreeNode(3)
  ),
  new TreeNode(7,
    new TreeNode(6),
    new TreeNode(9)
  )
);

let res = invertTree(root);
function printTree(node) {
  if (!node) return;
  console.log(node.val);
  printTree(node.left);
  printTree(node.right);
}
printTree(res);`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def invertTree(root):
    # Write your solution here
    pass

# Test cases
root = TreeNode(4,
    TreeNode(2,
        TreeNode(1),
        TreeNode(3)
    ),
    TreeNode(7,
        TreeNode(6),
        TreeNode(9)
    )
)

def printTree(node):
    if not node:
        return
    print(node.val)
    printTree(node.left)
    printTree(node.right)

res = invertTree(root)
printTree(res)`,
      java: `class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static TreeNode invertTree(TreeNode root) {
        // Write your solution here
        return null;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(4,
            new TreeNode(2,
                new TreeNode(1),
                new TreeNode(3)
            ),
            new TreeNode(7,
                new TreeNode(6),
                new TreeNode(9)
            )
        );

        TreeNode res = invertTree(root);
        printTree(res);
    }

    static void printTree(TreeNode node) {
        if (node == null) return;
        System.out.println(node.val);
        printTree(node.left);
        printTree(node.right);
    }
}`,
      cpp: `#include <iostream>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

TreeNode* invertTree(TreeNode* root) {
    // Write your solution here
    return NULL;
}

void printTree(TreeNode* node) {
    if (!node) return;
    cout << node->val << endl;
    printTree(node->left);
    printTree(node->right);
}

int main() {
    TreeNode* root = new TreeNode(4);
    root->left = new TreeNode(2);
    root->right = new TreeNode(7);
    root->left->left = new TreeNode(1);
    root->left->right = new TreeNode(3);
    root->right->left = new TreeNode(6);
    root->right->right = new TreeNode(9);

    TreeNode* res = invertTree(root);
    printTree(res);
}`,
      csharp: `using System;

public class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static TreeNode InvertTree(TreeNode root) {
        // Write your solution here
        return null;
    }

    static void PrintTree(TreeNode node) {
        if (node == null) return;
        Console.WriteLine(node.val);
        PrintTree(node.left);
        PrintTree(node.right);
    }

    static void Main() {
        TreeNode root = new TreeNode(4,
            new TreeNode(2,
                new TreeNode(1),
                new TreeNode(3)
            ),
            new TreeNode(7,
                new TreeNode(6),
                new TreeNode(9)
            )
        );

        var res = InvertTree(root);
        PrintTree(res);
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct TreeNode {
    int val;
    struct TreeNode* left;
    struct TreeNode* right;
};

struct TreeNode* invertTree(struct TreeNode* root) {
    // Write your solution here
    return NULL;
}

void printTree(struct TreeNode* node) {
    if (!node) return;
    printf("%d\n", node->val);
    printTree(node->left);
    printTree(node->right);
}

int main() {
    struct TreeNode* root = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->val = 4;
    root->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->left->val = 2;
    root->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->val = 7;

    root->left->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->left->left->val = 1;
    root->left->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->left->right->val = 3;

    root->right->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->left->val = 6;
    root->right->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->right->val = 9;

    struct TreeNode* res = invertTree(root);
    printTree(res);

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "4\n7\n9\n6\n2\n3\n1",
      python: "4\n7\n9\n6\n2\n3\n1",
      java: "4\n7\n9\n6\n2\n3\n1",
      cpp: "4\n7\n9\n6\n2\n3\n1",
      csharp: "4\n7\n9\n6\n2\n3\n1",
      c: "4\n7\n9\n6\n2\n3\n1",
    },
  },
  "maximum-depth-of-binary-tree": {
    id: "maximum-depth-of-binary-tree",
    title: "Maximum Depth of Binary Tree",
    difficulty: "Easy",
    category: "Tree • Depth-First Search • Breadth-First Search",
    description: {
      text: "Given the root of a binary tree, return its maximum depth.",
      notes: [
        "A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
      ],
    },
    examples: [
      {
        input: "root = [3,9,20,null,null,15,7]",
        output: "3",
      },
      {
        input: "root = [1,null,2]",
        output: "2",
      },
    ],
    constraints: [
      "The number of nodes in the tree is in the range [0, 10⁴]",
      "-100 ≤ Node.val ≤ 100",
    ],
    starterCode: {
      javascript: `function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function maxDepth(root) {
  // Write your solution here

}

// Test cases
let root = new TreeNode(3,
  new TreeNode(9),
  new TreeNode(20,
    new TreeNode(15),
    new TreeNode(7)
  )
);

console.log(maxDepth(root)); // Expected: 3`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def maxDepth(root):
    # Write your solution here
    pass

# Test cases
root = TreeNode(3,
    TreeNode(9),
    TreeNode(20,
        TreeNode(15),
        TreeNode(7)
    )
)

print(maxDepth(root))  # Expected: 3`,
      java: `class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static int maxDepth(TreeNode root) {
        // Write your solution here

        return 0;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(3,
            new TreeNode(9),
            new TreeNode(20,
                new TreeNode(15),
                new TreeNode(7)
            )
        );

        System.out.println(maxDepth(root)); // Expected: 3
    }
}`,
      cpp: `#include <iostream>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

int maxDepth(TreeNode* root) {
    // Write your solution here
    return 0;
}

int main() {
    TreeNode* root = new TreeNode(3);
    root->left = new TreeNode(9);
    root->right = new TreeNode(20);
    root->right->left = new TreeNode(15);
    root->right->right = new TreeNode(7);

    cout << maxDepth(root) << endl;
}`,
      csharp: `using System;

public class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static int MaxDepth(TreeNode root) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        TreeNode root = new TreeNode(3,
            new TreeNode(9),
            new TreeNode(20,
                new TreeNode(15),
                new TreeNode(7)
            )
        );

        Console.WriteLine(MaxDepth(root));
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct TreeNode {
    int val;
    struct TreeNode* left;
    struct TreeNode* right;
};

int maxDepth(struct TreeNode* root) {
    // Write your solution here
    return 0;
}

int main() {
    struct TreeNode* root = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->val = 3;
    root->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->left->val = 9;
    root->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->val = 20;

    root->right->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->left->val = 15;
    root->right->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->right->val = 7;

    printf("%d\n", maxDepth(root));

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "3",
      python: "3",
      java: "3",
      cpp: "3",
      csharp: "3",
      c: "3",
    },
  },
  "diameter-of-binary-tree": {
    id: "diameter-of-binary-tree",
    title: "Diameter of Binary Tree",
    difficulty: "Easy",
    category: "Tree • Depth-First Search",
    description: {
      text: "Given the root of a binary tree, return the length of the diameter of the tree.",
      notes: [
        "The diameter of a binary tree is the length of the longest path between any two nodes in a tree.",
        "This path may or may not pass through the root.",
        "The length of a path between two nodes is represented by the number of edges between them.",
      ],
    },
    examples: [
      {
        input: "root = [1,2,3,4,5]",
        output: "3",
        explanation: "3 is the length of the path [4,2,1,3] or [5,2,1,3].",
      },
      {
        input: "root = [1,2]",
        output: "1",
      },
    ],
    constraints: [
      "The number of nodes in the tree is in the range [1, 10⁴]",
      "-100 ≤ Node.val ≤ 100",
    ],
    starterCode: {
      javascript: `function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function diameterOfBinaryTree(root) {
  // Write your solution here

}

// Test cases
let root = new TreeNode(1,
  new TreeNode(2,
    new TreeNode(4),
    new TreeNode(5)
  ),
  new TreeNode(3)
);

console.log(diameterOfBinaryTree(root)); // Expected: 3`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def diameterOfBinaryTree(root):
    # Write your solution here
    pass

# Test cases
root = TreeNode(1,
    TreeNode(2,
        TreeNode(4),
        TreeNode(5)
    ),
    TreeNode(3)
)

print(diameterOfBinaryTree(root))  # Expected: 3`,
      java: `class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static int diameterOfBinaryTree(TreeNode root) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(1,
            new TreeNode(2,
                new TreeNode(4),
                new TreeNode(5)
            ),
            new TreeNode(3)
        );

        System.out.println(diameterOfBinaryTree(root)); // Expected: 3
    }
}`,
      cpp: `#include <iostream>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

int diameterOfBinaryTree(TreeNode* root) {
    // Write your solution here
    return 0;
}

int main() {
    TreeNode* root = new TreeNode(1);
    root->left = new TreeNode(2);
    root->right = new TreeNode(3);
    root->left->left = new TreeNode(4);
    root->left->right = new TreeNode(5);

    cout << diameterOfBinaryTree(root) << endl;
}`,
      csharp: `using System;

public class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static int DiameterOfBinaryTree(TreeNode root) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        TreeNode root = new TreeNode(1,
            new TreeNode(2,
                new TreeNode(4),
                new TreeNode(5)
            ),
            new TreeNode(3)
        );

        Console.WriteLine(DiameterOfBinaryTree(root));
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct TreeNode {
    int val;
    struct TreeNode* left;
    struct TreeNode* right;
};

int diameterOfBinaryTree(struct TreeNode* root) {
    // Write your solution here
    return 0;
}

int main() {
    struct TreeNode* root = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->val = 1;
    root->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->left->val = 2;
    root->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->val = 3;

    root->left->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->left->left->val = 4;
    root->left->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->left->right->val = 5;

    printf("%d\n", diameterOfBinaryTree(root));

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "3",
      python: "3",
      java: "3",
      cpp: "3",
      csharp: "3",
      c: "3",
    },
  },
  "balanced-binary-tree": {
    id: "balanced-binary-tree",
    title: "Balanced Binary Tree",
    difficulty: "Easy",
    category: "Tree • Depth-First Search",
    description: {
      text: "Given a binary tree, determine if it is height-balanced.",
      notes: [
        "A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than 1.",
      ],
    },
    examples: [
      {
        input: "root = [3,9,20,null,null,15,7]",
        output: "true",
      },
      {
        input: "root = [1,2,2,3,3,null,null,4,4]",
        output: "false",
      },
      {
        input: "root = []",
        output: "true",
      },
    ],
    constraints: [
      "The number of nodes in the tree is in the range [0, 5000]",
      "-10⁴ ≤ Node.val ≤ 10⁴",
    ],
    starterCode: {
      javascript: `function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function isBalanced(root) {
  // Write your solution here

}

// Test cases
let root = new TreeNode(3,
  new TreeNode(9),
  new TreeNode(20,
    new TreeNode(15),
    new TreeNode(7)
  )
);

console.log(isBalanced(root)); // Expected: true`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def isBalanced(root):
    # Write your solution here
    pass

# Test cases
root = TreeNode(3,
    TreeNode(9),
    TreeNode(20,
        TreeNode(15),
        TreeNode(7)
    )
)

print(isBalanced(root))  # Expected: True`,
      java: `class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static boolean isBalanced(TreeNode root) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(3,
            new TreeNode(9),
            new TreeNode(20,
                new TreeNode(15),
                new TreeNode(7)
            )
        );

        System.out.println(isBalanced(root)); // Expected: true
    }
}`,
      cpp: `#include <iostream>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

bool isBalanced(TreeNode* root) {
    // Write your solution here
    return false;
}

int main() {
    TreeNode* root = new TreeNode(3);
    root->left = new TreeNode(9);
    root->right = new TreeNode(20);
    root->right->left = new TreeNode(15);
    root->right->right = new TreeNode(7);

    cout << boolalpha << isBalanced(root) << endl;
}`,
      csharp: `using System;

public class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static bool IsBalanced(TreeNode root) {
        // Write your solution here
        return false;
    }

    static void Main() {
        TreeNode root = new TreeNode(3,
            new TreeNode(9),
            new TreeNode(20,
                new TreeNode(15),
                new TreeNode(7)
            )
        );

        Console.WriteLine(IsBalanced(root));
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct TreeNode {
    int val;
    struct TreeNode* left;
    struct TreeNode* right;
};

int isBalanced(struct TreeNode* root) {
    // Write your solution here
    return 0;
}

int main() {
    struct TreeNode* root = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->val = 3;
    root->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->left->val = 9;
    root->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->val = 20;

    root->right->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->left->val = 15;
    root->right->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->right->val = 7;

    printf("%s\n", isBalanced(root) ? "true" : "false");

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true",
      python: "True",
      java: "true",
      cpp: "true",
      csharp: "true",
      c: "true",
    },
  },
  "same-tree": {
    id: "same-tree",
    title: "Same Tree",
    difficulty: "Easy",
    category: "Tree • Depth-First Search • Breadth-First Search",
    description: {
      text: "Given the roots of two binary trees p and q, write a function to check if they are the same or not.",
      notes: [
        "Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.",
      ],
    },
    examples: [
      {
        input: "p = [1,2,3], q = [1,2,3]",
        output: "true",
      },
      {
        input: "p = [1,2], q = [1,null,2]",
        output: "false",
      },
      {
        input: "p = [1,2,1], q = [1,1,2]",
        output: "false",
      },
    ],
    constraints: [
      "The number of nodes in both trees is in the range [0, 100]",
      "-10⁴ ≤ Node.val ≤ 10⁴",
    ],
    starterCode: {
      javascript: `function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function isSameTree(p, q) {
  // Write your solution here

}

// Test cases
let p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
let q = new TreeNode(1, new TreeNode(2), new TreeNode(3));

console.log(isSameTree(p, q)); // Expected: true`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def isSameTree(p, q):
    # Write your solution here
    pass

# Test cases
p = TreeNode(1, TreeNode(2), TreeNode(3))
q = TreeNode(1, TreeNode(2), TreeNode(3))

print(isSameTree(p, q))  # Expected: True`,
      java: `class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static boolean isSameTree(TreeNode p, TreeNode q) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        TreeNode p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        TreeNode q = new TreeNode(1, new TreeNode(2), new TreeNode(3));

        System.out.println(isSameTree(p, q)); // Expected: true
    }
}`,
      cpp: `#include <iostream>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

bool isSameTree(TreeNode* p, TreeNode* q) {
    // Write your solution here
    return false;
}

int main() {
    TreeNode* p = new TreeNode(1);
    p->left = new TreeNode(2);
    p->right = new TreeNode(3);

    TreeNode* q = new TreeNode(1);
    q->left = new TreeNode(2);
    q->right = new TreeNode(3);

    cout << boolalpha << isSameTree(p, q) << endl;
}`,
      csharp: `using System;

public class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static bool IsSameTree(TreeNode p, TreeNode q) {
        // Write your solution here
        return false;
    }

    static void Main() {
        TreeNode p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        TreeNode q = new TreeNode(1, new TreeNode(2), new TreeNode(3));

        Console.WriteLine(IsSameTree(p, q));
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct TreeNode {
    int val;
    struct TreeNode* left;
    struct TreeNode* right;
};

int isSameTree(struct TreeNode* p, struct TreeNode* q) {
    // Write your solution here
    return 0;
}

int main() {
    struct TreeNode* p = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    p->val = 1;
    p->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    p->left->val = 2;
    p->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    p->right->val = 3;

    struct TreeNode* q = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    q->val = 1;
    q->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    q->left->val = 2;
    q->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    q->right->val = 3;

    printf("%s\n", isSameTree(p, q) ? "true" : "false");

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true",
      python: "True",
      java: "true",
      cpp: "true",
      csharp: "true",
      c: "true",
    },
  },
  "subtree-of-another-tree": {
    id: "subtree-of-another-tree",
    title: "Subtree of Another Tree",
    difficulty: "Easy",
    category: "Tree • Depth-First Search",
    description: {
      text: "Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.",
      notes: [
        "A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants.",
        "The tree tree could also be considered as a subtree of itself.",
      ],
    },
    examples: [
      {
        input: "root = [3,4,5,1,2], subRoot = [4,1,2]",
        output: "true",
      },
      {
        input: "root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]",
        output: "false",
      },
    ],
    constraints: [
      "The number of nodes in the root tree is in the range [1, 2000]",
      "The number of nodes in the subRoot tree is in the range [1, 1000]",
      "-10⁴ ≤ root.val ≤ 10⁴",
      "-10⁴ ≤ subRoot.val ≤ 10⁴",
    ],
    starterCode: {
      javascript: `function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function isSubtree(root, subRoot) {
  // Write your solution here

}

// Test cases
let root = new TreeNode(3,
  new TreeNode(4,
    new TreeNode(1),
    new TreeNode(2)
  ),
  new TreeNode(5)
);

let subRoot = new TreeNode(4,
  new TreeNode(1),
  new TreeNode(2)
);

console.log(isSubtree(root, subRoot)); // Expected: true`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def isSubtree(root, subRoot):
    # Write your solution here
    pass

# Test cases
root = TreeNode(3,
    TreeNode(4,
        TreeNode(1),
        TreeNode(2)
    ),
    TreeNode(5)
)

subRoot = TreeNode(4,
    TreeNode(1),
    TreeNode(2)
)

print(isSubtree(root, subRoot))  # Expected: True`,
      java: `class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static boolean isSubtree(TreeNode root, TreeNode subRoot) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(3,
            new TreeNode(4,
                new TreeNode(1),
                new TreeNode(2)
            ),
            new TreeNode(5)
        );

        TreeNode subRoot = new TreeNode(4,
            new TreeNode(1),
            new TreeNode(2)
        );

        System.out.println(isSubtree(root, subRoot)); // Expected: true
    }
}`,
      cpp: `#include <iostream>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

bool isSubtree(TreeNode* root, TreeNode* subRoot) {
    // Write your solution here
    return false;
}

int main() {
    TreeNode* root = new TreeNode(3);
    root->left = new TreeNode(4);
    root->right = new TreeNode(5);
    root->left->left = new TreeNode(1);
    root->left->right = new TreeNode(2);

    TreeNode* subRoot = new TreeNode(4);
    subRoot->left = new TreeNode(1);
    subRoot->right = new TreeNode(2);

    cout << boolalpha << isSubtree(root, subRoot) << endl;
}`,
      csharp: `using System;

public class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static bool IsSubtree(TreeNode root, TreeNode subRoot) {
        // Write your solution here
        return false;
    }

    static void Main() {
        TreeNode root = new TreeNode(3,
            new TreeNode(4,
                new TreeNode(1),
                new TreeNode(2)
            ),
            new TreeNode(5)
        );

        TreeNode subRoot = new TreeNode(4,
            new TreeNode(1),
            new TreeNode(2)
        );

        Console.WriteLine(IsSubtree(root, subRoot));
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct TreeNode {
    int val;
    struct TreeNode* left;
    struct TreeNode* right;
};

int isSubtree(struct TreeNode* root, struct TreeNode* subRoot) {
    // Write your solution here
    return 0;
}

int main() {
    struct TreeNode* root = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->val = 3;
    root->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->left->val = 4;
    root->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->val = 5;

    root->left->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->left->left->val = 1;
    root->left->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->left->right->val = 2;

    struct TreeNode* subRoot = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    subRoot->val = 4;
    subRoot->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    subRoot->left->val = 1;
    subRoot->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    subRoot->right->val = 2;

    printf("%s\n", isSubtree(root, subRoot) ? "true" : "false");

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true",
      python: "True",
      java: "true",
      cpp: "true",
      csharp: "true",
      c: "true",
    },
  },
  "lowest-common-ancestor-of-a-binary-search-tree": {
    id: "lowest-common-ancestor-of-a-binary-search-tree",
    title: "Lowest Common Ancestor of a Binary Search Tree",
    difficulty: "Easy",
    category: "Tree • Binary Search Tree",
    description: {
      text: "Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.",
      notes: [
        "According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”",
      ],
    },
    examples: [
      {
        input: "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8",
        output: "6",
      },
      {
        input: "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4",
        output: "2",
      },
      {
        input: "root = [2,1], p = 2, q = 1",
        output: "2",
      },
    ],
    constraints: [
      "The number of nodes in the tree is in the range [2, 10⁵]",
      "-10⁹ ≤ Node.val ≤ 10⁹",
      "All Node.val are unique",
      "p != q",
      "p and q will exist in the BST",
    ],
    starterCode: {
      javascript: `function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function lowestCommonAncestor(root, p, q) {
  // Write your solution here

}

// Test cases
let root = new TreeNode(6,
  new TreeNode(2,
    new TreeNode(0),
    new TreeNode(4,
      new TreeNode(3),
      new TreeNode(5)
    )
  ),
  new TreeNode(8,
    new TreeNode(7),
    new TreeNode(9)
  )
);

let p = root.left; // 2
let q = root.right; // 8

console.log(lowestCommonAncestor(root, p, q).val); // Expected: 6`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def lowestCommonAncestor(root, p, q):
    # Write your solution here
    pass

# Test cases
root = TreeNode(6,
    TreeNode(2,
        TreeNode(0),
        TreeNode(4,
            TreeNode(3),
            TreeNode(5)
        )
    ),
    TreeNode(8,
        TreeNode(7),
        TreeNode(9)
    )
)

p = root.left
q = root.right

print(lowestCommonAncestor(root, p, q).val)  # Expected: 6`,
      java: `class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        // Write your solution here
        return null;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(6,
            new TreeNode(2,
                new TreeNode(0),
                new TreeNode(4,
                    new TreeNode(3),
                    new TreeNode(5)
                )
            ),
            new TreeNode(8,
                new TreeNode(7),
                new TreeNode(9)
            )
        );

        TreeNode p = root.left;
        TreeNode q = root.right;

        System.out.println(lowestCommonAncestor(root, p, q).val); // Expected: 6
    }
}`,
      cpp: `#include <iostream>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
    // Write your solution here
    return NULL;
}

int main() {
    TreeNode* root = new TreeNode(6);
    root->left = new TreeNode(2);
    root->right = new TreeNode(8);
    root->left->left = new TreeNode(0);
    root->left->right = new TreeNode(4);
    root->left->right->left = new TreeNode(3);
    root->left->right->right = new TreeNode(5);
    root->right->left = new TreeNode(7);
    root->right->right = new TreeNode(9);

    TreeNode* p = root->left;
    TreeNode* q = root->right;

    cout << lowestCommonAncestor(root, p, q)->val << endl;
}`,
      csharp: `using System;

public class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static TreeNode LowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        // Write your solution here
        return null;
    }

    static void Main() {
        TreeNode root = new TreeNode(6,
            new TreeNode(2,
                new TreeNode(0),
                new TreeNode(4,
                    new TreeNode(3),
                    new TreeNode(5)
                )
            ),
            new TreeNode(8,
                new TreeNode(7),
                new TreeNode(9)
            )
        );

        TreeNode p = root.left;
        TreeNode q = root.right;

        Console.WriteLine(LowestCommonAncestor(root, p, q).val);
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct TreeNode {
    int val;
    struct TreeNode* left;
    struct TreeNode* right;
};

struct TreeNode* lowestCommonAncestor(struct TreeNode* root, struct TreeNode* p, struct TreeNode* q) {
    // Write your solution here
    return NULL;
}

int main() {
    struct TreeNode* root = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->val = 6;
    root->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->left->val = 2;
    root->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->val = 8;

    root->left->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->left->left->val = 0;
    root->left->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->left->right->val = 4;

    root->right->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->left->val = 7;
    root->right->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->right->val = 9;

    struct TreeNode* p = root->left;
    struct TreeNode* q = root->right;

    printf("%d\n", lowestCommonAncestor(root, p, q)->val);

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "6",
      python: "6",
      java: "6",
      cpp: "6",
      csharp: "6",
      c: "6",
    },
  },
  "binary-tree-level-order-traversal": {
    id: "binary-tree-level-order-traversal",
    title: "Binary Tree Level Order Traversal",
    difficulty: "Medium",
    category: "Tree • Breadth-First Search",
    description: {
      text: "Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).",
      notes: [],
    },
    examples: [
      {
        input: "root = [3,9,20,null,null,15,7]",
        output: "[[3],[9,20],[15,7]]",
      },
      {
        input: "root = [1]",
        output: "[[1]]",
      },
      {
        input: "root = []",
        output: "[]",
      },
    ],
    constraints: [
      "The number of nodes in the tree is in the range [0, 2000]",
      "-1000 ≤ Node.val ≤ 1000",
    ],
    starterCode: {
      javascript: `function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function levelOrder(root) {
  // Write your solution here

}

// Test cases
let root = new TreeNode(3,
  new TreeNode(9),
  new TreeNode(20,
    new TreeNode(15),
    new TreeNode(7)
  )
);

console.log(levelOrder(root)); // Expected: [[3],[9,20],[15,7]]`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def levelOrder(root):
    # Write your solution here
    pass

# Test cases
root = TreeNode(3,
    TreeNode(9),
    TreeNode(20,
        TreeNode(15),
        TreeNode(7)
    )
)

print(levelOrder(root))  # Expected: [[3],[9,20],[15,7]]`,
      java: `import java.util.*;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static List<List<Integer>> levelOrder(TreeNode root) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(3,
            new TreeNode(9),
            new TreeNode(20,
                new TreeNode(15),
                new TreeNode(7)
            )
        );

        System.out.println(levelOrder(root)); // Expected: [[3],[9,20],[15,7]]
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

vector<vector<int>> levelOrder(TreeNode* root) {
    // Write your solution here
    return {};
}

int main() {
    TreeNode* root = new TreeNode(3);
    root->left = new TreeNode(9);
    root->right = new TreeNode(20);
    root->right->left = new TreeNode(15);
    root->right->right = new TreeNode(7);

    vector<vector<int>> res = levelOrder(root);
    for (auto& level : res) {
        cout << "[";
        for (int i = 0; i < level.size(); i++) {
            cout << level[i] << (i + 1 < level.size() ? "," : "");
        }
        cout << "]\n";
    }
}`,
      csharp: `using System;
using System.Collections.Generic;

public class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static IList<IList<int>> LevelOrder(TreeNode root) {
        // Write your solution here
        return new List<IList<int>>();
    }

    static void Main() {
        TreeNode root = new TreeNode(3,
            new TreeNode(9),
            new TreeNode(20,
                new TreeNode(15),
                new TreeNode(7)
            )
        );

        var res = LevelOrder(root);
        foreach (var level in res) {
            Console.WriteLine("[" + string.Join(",", level) + "]");
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct TreeNode {
    int val;
    struct TreeNode* left;
    struct TreeNode* right;
};

void levelOrder(struct TreeNode* root) {
    // Write your solution here
}

int main() {
    struct TreeNode* root = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->val = 3;
    root->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->left->val = 9;
    root->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->val = 20;

    root->right->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->left->val = 15;
    root->right->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->right->val = 7;

    levelOrder(root);
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[[3],[9,20],[15,7]]",
      python: "[[3], [9, 20], [15, 7]]",
      java: "[[3], [9, 20], [15, 7]]",
      cpp: "[3]\n[9,20]\n[15,7]",
      csharp: "[3]\n[9,20]\n[15,7]",
      c: "Level order traversal printed",
    },
  },
  "binary-tree-right-side-view": {
    id: "binary-tree-right-side-view",
    title: "Binary Tree Right Side View",
    difficulty: "Medium",
    category: "Tree • Breadth-First Search • Depth-First Search",
    description: {
      text: "Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.",
      notes: [],
    },
    examples: [
      {
        input: "root = [1,2,3,null,5,null,4]",
        output: "[1,3,4]",
      },
      {
        input: "root = [1,null,3]",
        output: "[1,3]",
      },
      {
        input: "root = []",
        output: "[]",
      },
    ],
    constraints: [
      "The number of nodes in the tree is in the range [0, 100]",
      "-100 ≤ Node.val ≤ 100",
    ],
    starterCode: {
      javascript: `function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function rightSideView(root) {
  // Write your solution here

}

// Test cases
let root = new TreeNode(1,
  new TreeNode(2,
    null,
    new TreeNode(5)
  ),
  new TreeNode(3,
    null,
    new TreeNode(4)
  )
);

console.log(rightSideView(root)); // Expected: [1,3,4]`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def rightSideView(root):
    # Write your solution here
    pass

# Test cases
root = TreeNode(1,
    TreeNode(2,
        None,
        TreeNode(5)
    ),
    TreeNode(3,
        None,
        TreeNode(4)
    )
)

print(rightSideView(root))  # Expected: [1,3,4]`,
      java: `import java.util.*;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static List<Integer> rightSideView(TreeNode root) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(1,
            new TreeNode(2,
                null,
                new TreeNode(5)
            ),
            new TreeNode(3,
                null,
                new TreeNode(4)
            )
        );

        System.out.println(rightSideView(root)); // Expected: [1,3,4]
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

vector<int> rightSideView(TreeNode* root) {
    // Write your solution here
    return {};
}

int main() {
    TreeNode* root = new TreeNode(1);
    root->left = new TreeNode(2);
    root->left->right = new TreeNode(5);
    root->right = new TreeNode(3);
    root->right->right = new TreeNode(4);

    vector<int> res = rightSideView(root);
    cout << "[";
    for (int i = 0; i < res.size(); i++) {
        cout << res[i] << (i + 1 < res.size() ? "," : "");
    }
    cout << "]" << endl;
}`,
      csharp: `using System;
using System.Collections.Generic;

public class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static IList<int> RightSideView(TreeNode root) {
        // Write your solution here
        return new List<int>();
    }

    static void Main() {
        TreeNode root = new TreeNode(1,
            new TreeNode(2,
                null,
                new TreeNode(5)
            ),
            new TreeNode(3,
                null,
                new TreeNode(4)
            )
        );

        var res = RightSideView(root);
        Console.WriteLine("[" + string.Join(",", res) + "]");
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct TreeNode {
    int val;
    struct TreeNode* left;
    struct TreeNode* right;
};

void rightSideView(struct TreeNode* root) {
    // Write your solution here
}

int main() {
    struct TreeNode* root = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->val = 1;
    root->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->left->val = 2;
    root->left->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->left->right->val = 5;
    root->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->val = 3;
    root->right->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->right->val = 4;

    rightSideView(root);
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[1,3,4]",
      python: "[1, 3, 4]",
      java: "[1, 3, 4]",
      cpp: "[1,3,4]",
      csharp: "[1,3,4]",
      c: "Right side view printed",
    },
  },
  "count-good-nodes-in-binary-tree": {
    id: "count-good-nodes-in-binary-tree",
    title: "Count Good Nodes in Binary Tree",
    difficulty: "Medium",
    category: "Tree • Depth-First Search",
    description: {
      text: "Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.",
      notes: ["Return the number of good nodes in the binary tree."],
    },
    examples: [
      {
        input: "root = [3,1,4,3,null,1,5]",
        output: "4",
        explanation: "Nodes in blue are good.",
      },
      {
        input: "root = [3,3,null,4,2]",
        output: "3",
      },
      {
        input: "root = [1]",
        output: "1",
      },
    ],
    constraints: [
      "The number of nodes in the binary tree is in the range [1, 10⁵]",
      "-10⁴ ≤ Node.val ≤ 10⁴",
    ],
    starterCode: {
      javascript: `function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function goodNodes(root) {
  // Write your solution here

}

// Test cases
let root = new TreeNode(3,
  new TreeNode(1,
    new TreeNode(3)
  ),
  new TreeNode(4,
    new TreeNode(1),
    new TreeNode(5)
  )
);

console.log(goodNodes(root)); // Expected: 4`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def goodNodes(root):
    # Write your solution here
    pass

# Test cases
root = TreeNode(3,
    TreeNode(1,
        TreeNode(3)
    ),
    TreeNode(4,
        TreeNode(1),
        TreeNode(5)
    )
)

print(goodNodes(root))  # Expected: 4`,
      java: `class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static int goodNodes(TreeNode root) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(3,
            new TreeNode(1,
                new TreeNode(3)
            ),
            new TreeNode(4,
                new TreeNode(1),
                new TreeNode(5)
            )
        );

        System.out.println(goodNodes(root)); // Expected: 4
    }
}`,
      cpp: `#include <iostream>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

int goodNodes(TreeNode* root) {
    // Write your solution here
    return 0;
}

int main() {
    TreeNode* root = new TreeNode(3);
    root->left = new TreeNode(1);
    root->left->left = new TreeNode(3);
    root->right = new TreeNode(4);
    root->right->left = new TreeNode(1);
    root->right->right = new TreeNode(5);

    cout << goodNodes(root) << endl;
}`,
      csharp: `using System;

public class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static int GoodNodes(TreeNode root) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        TreeNode root = new TreeNode(3,
            new TreeNode(1,
                new TreeNode(3)
            ),
            new TreeNode(4,
                new TreeNode(1),
                new TreeNode(5)
            )
        );

        Console.WriteLine(GoodNodes(root));
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct TreeNode {
    int val;
    struct TreeNode* left;
    struct TreeNode* right;
};

int goodNodes(struct TreeNode* root) {
    // Write your solution here
    return 0;
}

int main() {
    struct TreeNode* root = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->val = 3;
    root->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->left->val = 1;
    root->left->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->left->left->val = 3;
    root->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->val = 4;
    root->right->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->left->val = 1;
    root->right->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->right->val = 5;

    printf("%d\n", goodNodes(root));
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "4",
      python: "4",
      java: "4",
      cpp: "4",
      csharp: "4",
      c: "4",
    },
  },
  "validate-binary-search-tree": {
    id: "validate-binary-search-tree",
    title: "Validate Binary Search Tree",
    difficulty: "Medium",
    category: "Tree • Depth-First Search • Binary Search Tree",
    description: {
      text: "Given the root of a binary tree, determine if it is a valid binary search tree (BST).",
      notes: [
        "A valid BST is defined as follows:",
        "The left subtree of a node contains only nodes with keys less than the node's key.",
        "The right subtree of a node contains only nodes with keys greater than the node's key.",
        "Both the left and right subtrees must also be binary search trees.",
      ],
    },
    examples: [
      {
        input: "root = [2,1,3]",
        output: "true",
      },
      {
        input: "root = [5,1,4,null,null,3,6]",
        output: "false",
      },
    ],
    constraints: [
      "The number of nodes in the tree is in the range [1, 10⁴]",
      "-2³¹ ≤ Node.val ≤ 2³¹ - 1",
    ],
    starterCode: {
      javascript: `function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function isValidBST(root) {
  // Write your solution here

}

// Test cases
let root = new TreeNode(2,
  new TreeNode(1),
  new TreeNode(3)
);

console.log(isValidBST(root)); // Expected: true`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def isValidBST(root):
    # Write your solution here
    pass

# Test cases
root = TreeNode(2,
    TreeNode(1),
    TreeNode(3)
)

print(isValidBST(root))  # Expected: True`,
      java: `class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static boolean isValidBST(TreeNode root) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(2,
            new TreeNode(1),
            new TreeNode(3)
        );

        System.out.println(isValidBST(root)); // Expected: true
    }
}`,
      cpp: `#include <iostream>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

bool isValidBST(TreeNode* root) {
    // Write your solution here
    return false;
}

int main() {
    TreeNode* root = new TreeNode(2);
    root->left = new TreeNode(1);
    root->right = new TreeNode(3);

    cout << boolalpha << isValidBST(root) << endl;
}`,
      csharp: `using System;

public class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static bool IsValidBST(TreeNode root) {
        // Write your solution here
        return false;
    }

    static void Main() {
        TreeNode root = new TreeNode(2,
            new TreeNode(1),
            new TreeNode(3)
        );

        Console.WriteLine(IsValidBST(root));
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

struct TreeNode {
    int val;
    struct TreeNode* left;
    struct TreeNode* right;
};

int isValidBSTHelper(struct TreeNode* node, long min, long max) {
    if (!node) return 1;
    if (node->val <= min || node->val >= max) return 0;
    return isValidBSTHelper(node->left, min, node->val) &&
           isValidBSTHelper(node->right, node->val, max);
}

int isValidBST(struct TreeNode* root) {
    return isValidBSTHelper(root, LONG_MIN, LONG_MAX);
}

int main() {
    struct TreeNode* root = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->val = 2;
    root->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->left->val = 1;
    root->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->val = 3;

    printf("%s\n", isValidBST(root) ? "true" : "false");

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true",
      python: "True",
      java: "true",
      cpp: "true",
      csharp: "true",
      c: "true",
    },
  },
  "kth-smallest-element-in-a-bst": {
    id: "kth-smallest-element-in-a-bst",
    title: "Kth Smallest Element in a BST",
    difficulty: "Medium",
    category: "Tree • Depth-First Search • Binary Search Tree",
    description: {
      text: "Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.",
      notes: [],
    },
    examples: [
      {
        input: "root = [3,1,4,null,2], k = 1",
        output: "1",
      },
      {
        input: "root = [5,3,6,2,4,null,null,1], k = 3",
        output: "3",
      },
    ],
    constraints: [
      "The number of nodes in the tree is n",
      "1 ≤ k ≤ n ≤ 10⁴",
      "0 ≤ Node.val ≤ 10⁴",
    ],
    starterCode: {
      javascript: `function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function kthSmallest(root, k) {
  // Write your solution here

}

// Test cases
let root = new TreeNode(3,
  new TreeNode(1,
    null,
    new TreeNode(2)
  ),
  new TreeNode(4)
);

console.log(kthSmallest(root, 1)); // Expected: 1`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def kthSmallest(root, k):
    # Write your solution here
    pass

# Test cases
root = TreeNode(3,
    TreeNode(1,
        None,
        TreeNode(2)
    ),
    TreeNode(4)
)

print(kthSmallest(root, 1))  # Expected: 1`,
      java: `class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static int kthSmallest(TreeNode root, int k) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(3,
            new TreeNode(1,
                null,
                new TreeNode(2)
            ),
            new TreeNode(4)
        );

        System.out.println(kthSmallest(root, 1)); // Expected: 1
    }
}`,
      cpp: `#include <iostream>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

int kthSmallest(TreeNode* root, int k) {
    // Write your solution here
    return 0;
}

int main() {
    TreeNode* root = new TreeNode(3);
    root->left = new TreeNode(1);
    root->left->right = new TreeNode(2);
    root->right = new TreeNode(4);

    cout << kthSmallest(root, 1) << endl;
}`,
      csharp: `using System;

public class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static int KthSmallest(TreeNode root, int k) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        TreeNode root = new TreeNode(3,
            new TreeNode(1,
                null,
                new TreeNode(2)
            ),
            new TreeNode(4)
        );

        Console.WriteLine(KthSmallest(root, 1));
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct TreeNode {
    int val;
    struct TreeNode* left;
    struct TreeNode* right;
};

int kthSmallest(struct TreeNode* root, int k) {
    // Write your solution here
    return 0;
}

int main() {
    struct TreeNode* root = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->val = 3;
    root->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->left->val = 1;
    root->left->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->left->right->val = 2;
    root->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->val = 4;

    printf("%d\n", kthSmallest(root, 1));
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "1",
      python: "1",
      java: "1",
      cpp: "1",
      csharp: "1",
      c: "1",
    },
  },
  "construct-binary-tree-from-preorder-and-inorder-traversal": {
    id: "construct-binary-tree-from-preorder-and-inorder-traversal",
    title: "Construct Binary Tree from Preorder and Inorder Traversal",
    difficulty: "Medium",
    category: "Tree • Depth-First Search • Divide and Conquer",
    description: {
      text: "Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.",
      notes: ["You may assume that duplicates do not exist in the tree."],
    },
    examples: [
      {
        input: "preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]",
        output: "[3,9,20,null,null,15,7]",
      },
      {
        input: "preorder = [-1], inorder = [-1]",
        output: "[-1]",
      },
    ],
    constraints: [
      "1 ≤ preorder.length ≤ 3000",
      "inorder.length == preorder.length",
      "-3000 ≤ preorder[i], inorder[i] ≤ 3000",
      "preorder and inorder consist of unique values",
      "Each value of inorder also appears in preorder",
    ],
    starterCode: {
      javascript: `function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function buildTree(preorder, inorder) {
  // Write your solution here

}

// Test cases
let preorder = [3,9,20,15,7];
let inorder = [9,3,15,20,7];

let root = buildTree(preorder, inorder);
function printTree(node) {
  if (!node) return;
  console.log(node.val);
  printTree(node.left);
  printTree(node.right);
}
printTree(root);`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def buildTree(preorder, inorder):
    # Write your solution here
    pass

# Test cases
preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]

def printTree(node):
    if not node:
        return
    print(node.val)
    printTree(node.left)
    printTree(node.right)

root = buildTree(preorder, inorder)
printTree(root)`,
      java: `class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static TreeNode buildTree(int[] preorder, int[] inorder) {
        // Write your solution here
        return null;
    }

    public static void main(String[] args) {
        int[] preorder = {3,9,20,15,7};
        int[] inorder = {9,3,15,20,7};

        TreeNode root = buildTree(preorder, inorder);
        printTree(root);
    }

    static void printTree(TreeNode node) {
        if (node == null) return;
        System.out.println(node.val);
        printTree(node.left);
        printTree(node.right);
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
    // Write your solution here
    return NULL;
}

void printTree(TreeNode* node) {
    if (!node) return;
    cout << node->val << endl;
    printTree(node->left);
    printTree(node->right);
}

int main() {
    vector<int> preorder = {3,9,20,15,7};
    vector<int> inorder = {9,3,15,20,7};

    TreeNode* root = buildTree(preorder, inorder);
    printTree(root);
}`,
      csharp: `using System;

public class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static TreeNode BuildTree(int[] preorder, int[] inorder) {
        // Write your solution here
        return null;
    }

    static void PrintTree(TreeNode node) {
        if (node == null) return;
        Console.WriteLine(node.val);
        PrintTree(node.left);
        PrintTree(node.right);
    }

    static void Main() {
        int[] preorder = {3,9,20,15,7};
        int[] inorder = {9,3,15,20,7};

        var root = BuildTree(preorder, inorder);
        PrintTree(root);
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct TreeNode {
    int val;
    struct TreeNode* left;
    struct TreeNode* right;
};

struct TreeNode* buildTree(int* preorder, int preorderSize, int* inorder, int inorderSize) {
    // Write your solution here
    return NULL;
}

void printTree(struct TreeNode* node) {
    if (!node) return;
    printf("%d\n", node->val);
    printTree(node->left);
    printTree(node->right);
}

int main() {
    int preorder[] = {3,9,20,15,7};
    int inorder[] = {9,3,15,20,7};

    struct TreeNode* root = buildTree(preorder, 5, inorder, 5);
    printTree(root);
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "3\n9\n20\n15\n7",
      python: "3\n9\n20\n15\n7",
      java: "3\n9\n20\n15\n7",
      cpp: "3\n9\n20\n15\n7",
      csharp: "3\n9\n20\n15\n7",
      c: "3\n9\n20\n15\n7",
    },
  },
  "binary-tree-maximum-path-sum": {
    id: "binary-tree-maximum-path-sum",
    title: "Binary Tree Maximum Path Sum",
    difficulty: "Hard",
    category: "Tree • Depth-First Search",
    description: {
      text: "A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them.",
      notes: [
        "A node can only appear in the sequence at most once.",
        "Note that the path does not need to pass through the root.",
        "The path sum of a path is the sum of the node's values in the path.",
        "Given the root of a binary tree, return the maximum path sum of any non-empty path.",
      ],
    },
    examples: [
      {
        input: "root = [1,2,3]",
        output: "6",
      },
      {
        input: "root = [-10,9,20,null,null,15,7]",
        output: "42",
      },
    ],
    constraints: [
      "The number of nodes in the tree is in the range [1, 3 * 10⁴]",
      "-1000 ≤ Node.val ≤ 1000",
    ],
    starterCode: {
      javascript: `function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function maxPathSum(root) {
  // Write your solution here

}

// Test cases
let root = new TreeNode(1,
  new TreeNode(2),
  new TreeNode(3)
);

console.log(maxPathSum(root)); // Expected: 6`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def maxPathSum(root):
    # Write your solution here
    pass

# Test cases
root = TreeNode(1,
    TreeNode(2),
    TreeNode(3)
)

print(maxPathSum(root))  # Expected: 6`,
      java: `class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static int maxPathSum(TreeNode root) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(1,
            new TreeNode(2),
            new TreeNode(3)
        );

        System.out.println(maxPathSum(root)); // Expected: 6
    }
}`,
      cpp: `#include <iostream>
#include <algorithm>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

int maxPathSum(TreeNode* root) {
    // Write your solution here
    return 0;
}

int main() {
    TreeNode* root = new TreeNode(1);
    root->left = new TreeNode(2);
    root->right = new TreeNode(3);

    cout << maxPathSum(root) << endl;
}`,
      csharp: `using System;

public class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static int MaxPathSum(TreeNode root) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        TreeNode root = new TreeNode(1,
            new TreeNode(2),
            new TreeNode(3)
        );

        Console.WriteLine(MaxPathSum(root));
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct TreeNode {
    int val;
    struct TreeNode* left;
    struct TreeNode* right;
};

int maxPathSum(struct TreeNode* root) {
    // Write your solution here
    return 0;
}

int main() {
    struct TreeNode* root = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->val = 1;
    root->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->left->val = 2;
    root->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->val = 3;

    printf("%d\n", maxPathSum(root));
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "6",
      python: "6",
      java: "6",
      cpp: "6",
      csharp: "6",
      c: "6",
    },
  },
  "serialize-and-deserialize-binary-tree": {
    id: "serialize-and-deserialize-binary-tree",
    title: "Serialize and Deserialize Binary Tree",
    difficulty: "Hard",
    category: "Tree • Depth-First Search • Breadth-First Search • Design",
    description: {
      text: "Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored or transmitted.",
      notes: [
        "Design an algorithm to serialize and deserialize a binary tree.",
        "There is no restriction on how your serialization/deserialization algorithm should work.",
        "You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.",
      ],
    },
    examples: [
      {
        input: "root = [1,2,3,null,null,4,5]",
        output: "[1,2,3,null,null,4,5]",
      },
      {
        input: "root = []",
        output: "[]",
      },
    ],
    constraints: [
      "The number of nodes in the tree is in the range [0, 10⁴]",
      "-1000 ≤ Node.val ≤ 1000",
    ],
    starterCode: {
      javascript: `function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

class Codec {
  serialize(root) {
    // Write your solution here
  }

  deserialize(data) {
    // Write your solution here
  }
}

// Test cases
let root = new TreeNode(1,
  new TreeNode(2),
  new TreeNode(3,
    new TreeNode(4),
    new TreeNode(5)
  )
);

let codec = new Codec();
let data = codec.serialize(root);
let newRoot = codec.deserialize(data);

function printTree(node) {
  if (!node) return;
  console.log(node.val);
  printTree(node.left);
  printTree(node.right);
}

printTree(newRoot);`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Codec:
    def serialize(self, root):
        # Write your solution here
        pass

    def deserialize(self, data):
        # Write your solution here
        pass

# Test cases
root = TreeNode(1,
    TreeNode(2),
    TreeNode(3,
        TreeNode(4),
        TreeNode(5)
    )
)

codec = Codec()
data = codec.serialize(root)
newRoot = codec.deserialize(data)

def printTree(node):
    if not node:
        return
    print(node.val)
    printTree(node.left)
    printTree(node.right)

printTree(newRoot)`,
      java: `class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}

class Codec {

    public String serialize(TreeNode root) {
        // Write your solution here
        return "";
    }

    public TreeNode deserialize(String data) {
        // Write your solution here
        return null;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.right.left = new TreeNode(4);
        root.right.right = new TreeNode(5);

        Codec codec = new Codec();
        String data = codec.serialize(root);
        TreeNode newRoot = codec.deserialize(data);

        printTree(newRoot);
    }

    static void printTree(TreeNode node) {
        if (node == null) return;
        System.out.println(node.val);
        printTree(node.left);
        printTree(node.right);
    }
}`,
      cpp: `#include <iostream>
#include <sstream>
#include <queue>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Codec {
public:
    string serialize(TreeNode* root) {
        // Write your solution here
        return "";
    }

    TreeNode* deserialize(string data) {
        // Write your solution here
        return NULL;
    }
};

void printTree(TreeNode* node) {
    if (!node) return;
    cout << node->val << endl;
    printTree(node->left);
    printTree(node->right);
}

int main() {
    TreeNode* root = new TreeNode(1);
    root->left = new TreeNode(2);
    root->right = new TreeNode(3);
    root->right->left = new TreeNode(4);
    root->right->right = new TreeNode(5);

    Codec codec;
    string data = codec.serialize(root);
    TreeNode* newRoot = codec.deserialize(data);

    printTree(newRoot);
}`,
      csharp: `using System;
using System.Collections.Generic;

public class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int x) { val = x; }
}

class Codec {

    public string serialize(TreeNode root) {
        // Write your solution here
        return "";
    }

    public TreeNode deserialize(string data) {
        // Write your solution here
        return null;
    }

    static void PrintTree(TreeNode node) {
        if (node == null) return;
        Console.WriteLine(node.val);
        PrintTree(node.left);
        PrintTree(node.right);
    }

    static void Main() {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.right.left = new TreeNode(4);
        root.right.right = new TreeNode(5);

        Codec codec = new Codec();
        string data = codec.serialize(root);
        TreeNode newRoot = codec.deserialize(data);

        PrintTree(newRoot);
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct TreeNode {
    int val;
    struct TreeNode* left;
    struct TreeNode* right;
};

// Note: Full implementation in C is complex for serialization/deserialization.
// Placeholder functions provided.

char* serialize(struct TreeNode* root) {
    // Write your solution here
    return "";
}

struct TreeNode* deserialize(char* data) {
    // Write your solution here
    return NULL;
}

void printTree(struct TreeNode* node) {
    if (!node) return;
    printf("%d\n", node->val);
    printTree(node->left);
    printTree(node->right);
}

int main() {
    struct TreeNode* root = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->val = 1;
    root->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->left->val = 2;
    root->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->val = 3;
    root->right->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->left->val = 4;
    root->right->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->right->val = 5;

    char* data = serialize(root);
    struct TreeNode* newRoot = deserialize(data);

    printTree(newRoot);
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "1\n2\n3\n4\n5",
      python: "1\n2\n3\n4\n5",
      java: "1\n2\n3\n4\n5",
      cpp: "1\n2\n3\n4\n5",
      csharp: "1\n2\n3\n4\n5",
      c: "1\n2\n3\n4\n5",
    },
  },

  //Heap/Priority Queue
  "kth-largest-element-in-a-stream": {
    id: "kth-largest-element-in-a-stream",
    title: "Kth Largest Element in a Stream",
    difficulty: "Easy",
    category: "Heap • Priority Queue • Design",
    description: {
      text: "Design a class to find the kth largest element in a stream.",
      notes: [
        "Implement the KthLargest class:",
        "KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.",
        "int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.",
      ],
    },
    examples: [
      {
        input:
          '["KthLargest","add","add","add","add","add"]\n[[3,[4,5,8,2]],[3],[5],[10],[9],[4]]',
        output: "[null,4,5,5,8,8]",
      },
    ],
    constraints: [
      "1 ≤ k ≤ 10⁴",
      "0 ≤ nums.length ≤ 10⁴",
      "-10⁴ ≤ nums[i] ≤ 10⁴",
      "-10⁴ ≤ val ≤ 10⁴",
      "At most 10⁴ calls will be made to add",
    ],
    starterCode: {
      javascript: `class KthLargest {
  constructor(k, nums) {
    
  }

  add(val) {
    // Write your solution here
  }
}

// Test cases
let kthLargest = new KthLargest(3, [4,5,8,2]);
console.log(kthLargest.add(3));   // Expected: 4
console.log(kthLargest.add(5));   // Expected: 5
console.log(kthLargest.add(10));  // Expected: 5
console.log(kthLargest.add(9));   // Expected: 8
console.log(kthLargest.add(4));   // Expected: 8`,
      python: `class KthLargest:
    def __init__(self, k, nums):
        pass

    def add(self, val):
        # Write your solution here
        pass

# Test cases
kthLargest = KthLargest(3, [4,5,8,2])
print(kthLargest.add(3))   # Expected: 4
print(kthLargest.add(5))   # Expected: 5
print(kthLargest.add(10))  # Expected: 5
print(kthLargest.add(9))   # Expected: 8
print(kthLargest.add(4))   # Expected: 8`,
      java: `import java.util.*;

class KthLargest {
    public KthLargest(int k, int[] nums) {
        
    }

    public int add(int val) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        KthLargest kthLargest = new KthLargest(3, new int[]{4,5,8,2});
        System.out.println(kthLargest.add(3));
        System.out.println(kthLargest.add(5));
        System.out.println(kthLargest.add(10));
        System.out.println(kthLargest.add(9));
        System.out.println(kthLargest.add(4));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

class KthLargest {
public:
    KthLargest(int k, vector<int>& nums) {
        
    }

    int add(int val) {
        // Write your solution here
        return 0;
    }
};

int main() {
    vector<int> nums = {4,5,8,2};
    KthLargest kthLargest(3, nums);

    cout << kthLargest.add(3) << endl;
    cout << kthLargest.add(5) << endl;
    cout << kthLargest.add(10) << endl;
    cout << kthLargest.add(9) << endl;
    cout << kthLargest.add(4) << endl;
}`,
      csharp: `using System;
using System.Collections.Generic;

class KthLargest {
    public KthLargest(int k, int[] nums) {
        
    }

    public int Add(int val) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        KthLargest kthLargest = new KthLargest(3, new int[]{4,5,8,2});
        Console.WriteLine(kthLargest.Add(3));
        Console.WriteLine(kthLargest.Add(5));
        Console.WriteLine(kthLargest.Add(10));
        Console.WriteLine(kthLargest.Add(9));
        Console.WriteLine(kthLargest.Add(4));
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

// Simplified placeholder implementation

typedef struct {
    int k;
    int* arr;
    int size;
} KthLargest;

KthLargest* kthLargestCreate(int k, int* nums, int numsSize) {
    KthLargest* obj = (KthLargest*)malloc(sizeof(KthLargest));
    obj->k = k;
    obj->arr = nums;
    obj->size = numsSize;
    return obj;
}

int kthLargestAdd(KthLargest* obj, int val) {
    // Write your solution here
    return 0;
}

int main() {
    int nums[] = {4,5,8,2};
    KthLargest* kthLargest = kthLargestCreate(3, nums, 4);

    printf("%d\n", kthLargestAdd(kthLargest, 3));
    printf("%d\n", kthLargestAdd(kthLargest, 5));
    printf("%d\n", kthLargestAdd(kthLargest, 10));
    printf("%d\n", kthLargestAdd(kthLargest, 9));
    printf("%d\n", kthLargestAdd(kthLargest, 4));

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "4\n5\n5\n8\n8",
      python: "4\n5\n5\n8\n8",
      java: "4\n5\n5\n8\n8",
      cpp: "4\n5\n5\n8\n8",
      csharp: "4\n5\n5\n8\n8",
      c: "4\n5\n5\n8\n8",
    },
  },
  "last-stone-weight": {
    id: "last-stone-weight",
    title: "Last Stone Weight",
    difficulty: "Easy",
    category: "Heap • Priority Queue",
    description: {
      text: "You are given an array of integers stones where stones[i] is the weight of the ith stone.",
      notes: [
        "We are playing a game with the stones. On each turn, we choose the two heaviest stones and smash them together.",
        "If x == y, both stones are destroyed.",
        "If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.",
        "At the end of the game, there is at most one stone left.",
        "Return the weight of the last remaining stone. If there are no stones left, return 0.",
      ],
    },
    examples: [
      {
        input: "stones = [2,7,4,1,8,1]",
        output: "1",
      },
      {
        input: "stones = [1]",
        output: "1",
      },
    ],
    constraints: ["1 ≤ stones.length ≤ 30", "1 ≤ stones[i] ≤ 1000"],
    starterCode: {
      javascript: `function lastStoneWeight(stones) {
  // Write your solution here

}

// Test cases
console.log(lastStoneWeight([2,7,4,1,8,1])); // Expected: 1
console.log(lastStoneWeight([1])); // Expected: 1`,
      python: `def lastStoneWeight(stones):
    # Write your solution here
    pass

# Test cases
print(lastStoneWeight([2,7,4,1,8,1]))  # Expected: 1
print(lastStoneWeight([1]))  # Expected: 1`,
      java: `import java.util.*;

class Solution {
    public static int lastStoneWeight(int[] stones) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(lastStoneWeight(new int[]{2,7,4,1,8,1}));
        System.out.println(lastStoneWeight(new int[]{1}));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int lastStoneWeight(vector<int>& stones) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> v1 = {2,7,4,1,8,1};
    vector<int> v2 = {1};

    cout << lastStoneWeight(v1) << endl;
    cout << lastStoneWeight(v2) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int LastStoneWeight(int[] stones) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(LastStoneWeight(new int[]{2,7,4,1,8,1}));
        Console.WriteLine(LastStoneWeight(new int[]{1}));
    }
}`,
      c: `#include <stdio.h>

int lastStoneWeight(int stones[], int n) {
    // Write your solution here
    return 0;
}

int main() {
    int a1[] = {2,7,4,1,8,1};
    int a2[] = {1};

    printf("%d\n", lastStoneWeight(a1, 6));
    printf("%d\n", lastStoneWeight(a2, 1));

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "1\n1",
      python: "1\n1",
      java: "1\n1",
      cpp: "1\n1",
      csharp: "1\n1",
      c: "1\n1",
    },
  },
  "k-closest-points-to-origin": {
    id: "k-closest-points-to-origin",
    title: "K Closest Points to Origin",
    difficulty: "Medium",
    category: "Heap • Priority Queue • Divide and Conquer",
    description: {
      text: "Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).",
      notes: [
        "The distance between two points on the X-Y plane is the Euclidean distance.",
        "You may return the answer in any order.",
        "The answer is guaranteed to be unique (except for the order that it is in).",
      ],
    },
    examples: [
      {
        input: "points = [[1,3],[-2,2]], k = 1",
        output: "[[-2,2]]",
      },
      {
        input: "points = [[3,3],[5,-1],[-2,4]], k = 2",
        output: "[[3,3],[-2,4]]",
      },
    ],
    constraints: ["1 ≤ k ≤ points.length ≤ 10⁴", "-10⁴ ≤ xi, yi ≤ 10⁴"],
    starterCode: {
      javascript: `function kClosest(points, k) {
  // Write your solution here

}

// Test cases
console.log(kClosest([[1,3],[-2,2]], 1)); // Expected: [[-2,2]]
console.log(kClosest([[3,3],[5,-1],[-2,4]], 2)); // Expected: [[3,3],[-2,4]]`,
      python: `def kClosest(points, k):
    # Write your solution here
    pass

# Test cases
print(kClosest([[1,3],[-2,2]], 1))  # Expected: [[-2,2]]
print(kClosest([[3,3],[5,-1],[-2,4]], 2))  # Expected: [[3,3],[-2,4]]`,
      java: `import java.util.*;

class Solution {
    public static int[][] kClosest(int[][] points, int k) {
        // Write your solution here
        return new int[0][0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.deepToString(kClosest(new int[][]{{1,3},{-2,2}}, 1)));
        System.out.println(Arrays.deepToString(kClosest(new int[][]{{3,3},{5,-1},{-2,4}}, 2)));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {
    // Write your solution here
    return {};
}

int main() {
    vector<vector<int>> p1 = {{1,3},{-2,2}};
    vector<vector<int>> p2 = {{3,3},{5,-1},{-2,4}};

    auto r1 = kClosest(p1, 1);
    auto r2 = kClosest(p2, 2);

    for (auto& p : r1) cout << "[" << p[0] << "," << p[1] << "] ";
    cout << endl;

    for (auto& p : r2) cout << "[" << p[0] << "," << p[1] << "] ";
    cout << endl;
}`,
      csharp: `using System;

class Solution {
    public static int[][] KClosest(int[][] points, int k) {
        // Write your solution here
        return new int[0][];
    }

    static void Main() {
        var r1 = KClosest(new int[][] { new int[]{1,3}, new int[]{-2,2} }, 1);
        var r2 = KClosest(new int[][] { new int[]{3,3}, new int[]{5,-1}, new int[]{-2,4} }, 2);

        foreach (var p in r1) Console.Write($"[{p[0]},{p[1]}] ");
        Console.WriteLine();

        foreach (var p in r2) Console.Write($"[{p[0]},{p[1]}] ");
        Console.WriteLine();
    }
}`,
      c: `#include <stdio.h>

void kClosest(int points[][2], int n, int k) {
    // Write your solution here
}

int main() {
    int p1[][2] = {{1,3},{-2,2}};
    int p2[][2] = {{3,3},{5,-1},{-2,4}};

    kClosest(p1, 2, 1);
    kClosest(p2, 3, 2);

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[[-2,2]]\n[[3,3],[-2,4]]",
      python: "[[-2, 2]]\n[[3, 3], [-2, 4]]",
      java: "[[-2, 2]]\n[[3, 3], [-2, 4]]",
      cpp: "[-2,2]\n[3,3] [-2,4]",
      csharp: "[-2,2]\n[3,3] [-2,4]",
      c: "Closest points printed",
    },
  },
  "kth-largest-element-in-an-array": {
    id: "kth-largest-element-in-an-array",
    title: "Kth Largest Element in an Array",
    difficulty: "Medium",
    category: "Array • Heap • Quickselect",
    description: {
      text: "Given an integer array nums and an integer k, return the kth largest element in the array.",
      notes: [
        "Note that it is the kth largest element in the sorted order, not the kth distinct element.",
        "You must solve it in O(n) average time complexity.",
      ],
    },
    examples: [
      {
        input: "nums = [3,2,1,5,6,4], k = 2",
        output: "5",
      },
      {
        input: "nums = [3,2,3,1,2,4,5,5,6], k = 4",
        output: "4",
      },
    ],
    constraints: ["1 ≤ k ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function findKthLargest(nums, k) {
  // Write your solution here

}

// Test cases
console.log(findKthLargest([3,2,1,5,6,4], 2)); // Expected: 5
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4)); // Expected: 4`,
      python: `def findKthLargest(nums, k):
    # Write your solution here
    pass

# Test cases
print(findKthLargest([3,2,1,5,6,4], 2))  # Expected: 5
print(findKthLargest([3,2,3,1,2,4,5,5,6], 4))  # Expected: 4`,
      java: `import java.util.*;

class Solution {
    public static int findKthLargest(int[] nums, int k) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(findKthLargest(new int[]{3,2,1,5,6,4}, 2));
        System.out.println(findKthLargest(new int[]{3,2,3,1,2,4,5,5,6}, 4));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int findKthLargest(vector<int>& nums, int k) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> v1 = {3,2,1,5,6,4};
    vector<int> v2 = {3,2,3,1,2,4,5,5,6};

    cout << findKthLargest(v1, 2) << endl;
    cout << findKthLargest(v2, 4) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int FindKthLargest(int[] nums, int k) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(FindKthLargest(new int[]{3,2,1,5,6,4}, 2));
        Console.WriteLine(FindKthLargest(new int[]{3,2,3,1,2,4,5,5,6}, 4));
    }
}`,
      c: `#include <stdio.h>

int findKthLargest(int nums[], int n, int k) {
    // Write your solution here
    return 0;
}

int main() {
    int a1[] = {3,2,1,5,6,4};
    int a2[] = {3,2,3,1,2,4,5,5,6};

    printf("%d\n", findKthLargest(a1, 6, 2));
    printf("%d\n", findKthLargest(a2, 9, 4));

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "5\n4",
      python: "5\n4",
      java: "5\n4",
      cpp: "5\n4",
      csharp: "5\n4",
      c: "5\n4",
    },
  },
  "task-scheduler": {
    id: "task-scheduler",
    title: "Task Scheduler",
    difficulty: "Medium",
    category: "Greedy • Heap • Counting",
    description: {
      text: "Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task, and a non-negative integer n representing the cooling time between two same tasks.",
      notes: [
        "Each task takes one unit of time to complete.",
        "The CPU can complete either one task or be idle in each unit of time.",
        "Return the least number of units of times that the CPU will take to finish all the given tasks.",
      ],
    },
    examples: [
      {
        input: 'tasks = ["A","A","A","B","B","B"], n = 2',
        output: "8",
      },
      {
        input: 'tasks = ["A","C","A","B","D","B"], n = 1',
        output: "6",
      },
      {
        input: 'tasks = ["A","A","A","B","B","B"], n = 0',
        output: "6",
      },
    ],
    constraints: [
      "1 ≤ tasks.length ≤ 10⁴",
      "tasks[i] is uppercase English letter",
      "0 ≤ n ≤ 100",
    ],
    starterCode: {
      javascript: `function leastInterval(tasks, n) {
  // Write your solution here

}

// Test cases
console.log(leastInterval(["A","A","A","B","B","B"], 2)); // Expected: 8
console.log(leastInterval(["A","C","A","B","D","B"], 1)); // Expected: 6
console.log(leastInterval(["A","A","A","B","B","B"], 0)); // Expected: 6`,
      python: `def leastInterval(tasks, n):
    # Write your solution here
    pass

# Test cases
print(leastInterval(["A","A","A","B","B","B"], 2))  # Expected: 8
print(leastInterval(["A","C","A","B","D","B"], 1))  # Expected: 6
print(leastInterval(["A","A","A","B","B","B"], 0))  # Expected: 6`,
      java: `import java.util.*;

class Solution {
    public static int leastInterval(char[] tasks, int n) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(leastInterval(new char[]{'A','A','A','B','B','B'}, 2));
        System.out.println(leastInterval(new char[]{'A','C','A','B','D','B'}, 1));
        System.out.println(leastInterval(new char[]{'A','A','A','B','B','B'}, 0));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int leastInterval(vector<char>& tasks, int n) {
    // Write your solution here
    return 0;
}

int main() {
    vector<char> t1 = {'A','A','A','B','B','B'};
    vector<char> t2 = {'A','C','A','B','D','B'};

    cout << leastInterval(t1, 2) << endl;
    cout << leastInterval(t2, 1) << endl;
    cout << leastInterval(t1, 0) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int LeastInterval(char[] tasks, int n) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(LeastInterval(new char[]{'A','A','A','B','B','B'}, 2));
        Console.WriteLine(LeastInterval(new char[]{'A','C','A','B','D','B'}, 1));
        Console.WriteLine(LeastInterval(new char[]{'A','A','A','B','B','B'}, 0));
    }
}`,
      c: `#include <stdio.h>

int leastInterval(char tasks[], int nTasks, int n) {
    // Write your solution here
    return 0;
}

int main() {
    char t1[] = {'A','A','A','B','B','B'};
    char t2[] = {'A','C','A','B','D','B'};

    printf("%d\n", leastInterval(t1, 6, 2));
    printf("%d\n", leastInterval(t2, 6, 1));
    printf("%d\n", leastInterval(t1, 6, 0));

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "8\n6\n6",
      python: "8\n6\n6",
      java: "8\n6\n6",
      cpp: "8\n6\n6",
      csharp: "8\n6\n6",
      c: "8\n6\n6",
    },
  },
  "design-twitter": {
    id: "design-twitter",
    title: "Design Twitter",
    difficulty: "Medium",
    category: "Hash Table • Heap • Design",
    description: {
      text: "Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and see the 10 most recent tweets in their news feed.",
      notes: [
        "Implement the Twitter class:",
        "Twitter() Initializes your twitter object.",
        "void postTweet(int userId, int tweetId) Composes a new tweet with ID tweetId by the user userId.",
        "List<Integer> getNewsFeed(int userId) Retrieves the 10 most recent tweet IDs in the user's news feed.",
        "void follow(int followerId, int followeeId) The user followerId started following the user followeeId.",
        "void unfollow(int followerId, int followeeId) The user followerId stopped following the user followeeId.",
      ],
    },
    examples: [
      {
        input:
          '["Twitter","postTweet","getNewsFeed","follow","postTweet","getNewsFeed","unfollow","getNewsFeed"]\n[[],[1,5],[1],[1,2],[2,6],[1],[1,2],[1]]',
        output: "[null,null,[5],null,null,[6,5],null,[5]]",
      },
    ],
    constraints: [
      "1 ≤ userId, followerId, followeeId ≤ 500",
      "0 ≤ tweetId ≤ 10⁴",
      "All the tweets have unique IDs",
      "At most 3 * 10⁴ calls will be made to postTweet, getNewsFeed, follow, and unfollow",
    ],
    starterCode: {
      javascript: `class Twitter {
  constructor() {
    
  }

  postTweet(userId, tweetId) {
    // Write your solution here
  }

  getNewsFeed(userId) {
    // Write your solution here
  }

  follow(followerId, followeeId) {
    // Write your solution here
  }

  unfollow(followerId, followeeId) {
    // Write your solution here
  }
}

// Test cases
let twitter = new Twitter();
twitter.postTweet(1, 5);
console.log(twitter.getNewsFeed(1)); // Expected: [5]
twitter.follow(1, 2);
twitter.postTweet(2, 6);
console.log(twitter.getNewsFeed(1)); // Expected: [6,5]
twitter.unfollow(1, 2);
console.log(twitter.getNewsFeed(1)); // Expected: [5]`,
      python: `class Twitter:
    def __init__(self):
        pass

    def postTweet(self, userId, tweetId):
        # Write your solution here
        pass

    def getNewsFeed(self, userId):
        # Write your solution here
        pass

    def follow(self, followerId, followeeId):
        # Write your solution here
        pass

    def unfollow(self, followerId, followeeId):
        # Write your solution here
        pass

# Test cases
twitter = Twitter()
twitter.postTweet(1, 5)
print(twitter.getNewsFeed(1))
twitter.follow(1, 2)
twitter.postTweet(2, 6)
print(twitter.getNewsFeed(1))
twitter.unfollow(1, 2)
print(twitter.getNewsFeed(1))`,
      java: `import java.util.*;

class Twitter {

    public Twitter() {
        
    }

    public void postTweet(int userId, int tweetId) {
        // Write your solution here
    }

    public List<Integer> getNewsFeed(int userId) {
        // Write your solution here
        return new ArrayList<>();
    }

    public void follow(int followerId, int followeeId) {
        // Write your solution here
    }

    public void unfollow(int followerId, int followeeId) {
        // Write your solution here
    }

    public static void main(String[] args) {
        Twitter twitter = new Twitter();
        twitter.postTweet(1, 5);
        System.out.println(twitter.getNewsFeed(1));
        twitter.follow(1, 2);
        twitter.postTweet(2, 6);
        System.out.println(twitter.getNewsFeed(1));
        twitter.unfollow(1, 2);
        System.out.println(twitter.getNewsFeed(1));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

class Twitter {
public:
    Twitter() {
        
    }

    void postTweet(int userId, int tweetId) {
        // Write your solution here
    }

    vector<int> getNewsFeed(int userId) {
        // Write your solution here
        return {};
    }

    void follow(int followerId, int followeeId) {
        // Write your solution here
    }

    void unfollow(int followerId, int followeeId) {
        // Write your solution here
    }
};

int main() {
    Twitter twitter;
    twitter.postTweet(1, 5);
    auto r1 = twitter.getNewsFeed(1);
    for (int x : r1) cout << x << " ";
    cout << endl;

    twitter.follow(1, 2);
    twitter.postTweet(2, 6);
    auto r2 = twitter.getNewsFeed(1);
    for (int x : r2) cout << x << " ";
    cout << endl;

    twitter.unfollow(1, 2);
    auto r3 = twitter.getNewsFeed(1);
    for (int x : r3) cout << x << " ";
    cout << endl;
}`,
      csharp: `using System;
using System.Collections.Generic;

class Twitter {

    public Twitter() {
        
    }

    public void PostTweet(int userId, int tweetId) {
        // Write your solution here
    }

    public IList<int> GetNewsFeed(int userId) {
        // Write your solution here
        return new List<int>();
    }

    public void Follow(int followerId, int followeeId) {
        // Write your solution here
    }

    public void Unfollow(int followerId, int followeeId) {
        // Write your solution here
    }

    static void Main() {
        Twitter twitter = new Twitter();
        twitter.PostTweet(1, 5);
        Console.WriteLine(string.Join(",", twitter.GetNewsFeed(1)));
        twitter.Follow(1, 2);
        twitter.PostTweet(2, 6);
        Console.WriteLine(string.Join(",", twitter.GetNewsFeed(1)));
        twitter.Unfollow(1, 2);
        Console.WriteLine(string.Join(",", twitter.GetNewsFeed(1)));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for complex design problem

int main() {
    printf("Design Twitter execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[5]\n[6,5]\n[5]",
      python: "[5]\n[6, 5]\n[5]",
      java: "[5]\n[6, 5]\n[5]",
      cpp: "5\n6 5\n5",
      csharp: "5\n6,5\n5",
      c: "Design Twitter execution",
    },
  },
  "find-median-from-data-stream": {
    id: "find-median-from-data-stream",
    title: "Find Median from Data Stream",
    difficulty: "Hard",
    category: "Heap • Design",
    description: {
      text: "The median is the middle value in an ordered integer list.",
      notes: [
        "If the size of the list is even, there is no middle value and the median is the mean of the two middle values.",
        "Implement the MedianFinder class:",
        "MedianFinder() initializes the object.",
        "void addNum(int num) adds the integer num from the data stream to the data structure.",
        "double findMedian() returns the median of all elements so far.",
      ],
    },
    examples: [
      {
        input:
          '["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]\n[[],[1],[2],[],[3],[]]',
        output: "[null,null,null,1.5,null,2.0]",
      },
    ],
    constraints: [
      "-10⁵ ≤ num ≤ 10⁵",
      "There will be at least one element in the data structure before calling findMedian",
      "At most 5 * 10⁴ calls will be made to addNum and findMedian",
    ],
    starterCode: {
      javascript: `class MedianFinder {
  constructor() {
    
  }

  addNum(num) {
    // Write your solution here
  }

  findMedian() {
    // Write your solution here
  }
}

// Test cases
let mf = new MedianFinder();
mf.addNum(1);
mf.addNum(2);
console.log(mf.findMedian()); // Expected: 1.5
mf.addNum(3);
console.log(mf.findMedian()); // Expected: 2.0`,
      python: `class MedianFinder:
    def __init__(self):
        pass

    def addNum(self, num):
        # Write your solution here
        pass

    def findMedian(self):
        # Write your solution here
        pass

# Test cases
mf = MedianFinder()
mf.addNum(1)
mf.addNum(2)
print(mf.findMedian())
mf.addNum(3)
print(mf.findMedian())`,
      java: `import java.util.*;

class MedianFinder {

    public MedianFinder() {
        
    }

    public void addNum(int num) {
        // Write your solution here
    }

    public double findMedian() {
        // Write your solution here
        return 0.0;
    }

    public static void main(String[] args) {
        MedianFinder mf = new MedianFinder();
        mf.addNum(1);
        mf.addNum(2);
        System.out.println(mf.findMedian());
        mf.addNum(3);
        System.out.println(mf.findMedian());
    }
}`,
      cpp: `#include <iostream>
using namespace std;

class MedianFinder {
public:
    MedianFinder() {
        
    }

    void addNum(int num) {
        // Write your solution here
    }

    double findMedian() {
        // Write your solution here
        return 0.0;
    }
};

int main() {
    MedianFinder mf;
    mf.addNum(1);
    mf.addNum(2);
    cout << mf.findMedian() << endl;
    mf.addNum(3);
    cout << mf.findMedian() << endl;
}`,
      csharp: `using System;

class MedianFinder {

    public MedianFinder() {
        
    }

    public void AddNum(int num) {
        // Write your solution here
    }

    public double FindMedian() {
        // Write your solution here
        return 0.0;
    }

    static void Main() {
        MedianFinder mf = new MedianFinder();
        mf.AddNum(1);
        mf.AddNum(2);
        Console.WriteLine(mf.FindMedian());
        mf.AddNum(3);
        Console.WriteLine(mf.FindMedian());
    }
}`,
      c: `#include <stdio.h>

// Placeholder for complex design problem

int main() {
    printf("Median Finder execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "1.5\n2",
      python: "1.5\n2",
      java: "1.5\n2.0",
      cpp: "1.5\n2",
      csharp: "1.5\n2",
      c: "Median Finder execution",
    },
  },

  //Backtracking
  subsets: {
    id: "subsets",
    title: "Subsets",
    difficulty: "Medium",
    category: "Backtracking • Bit Manipulation",
    description: {
      text: "Given an integer array nums of unique elements, return all possible subsets (the power set).",
      notes: [
        "The solution set must not contain duplicate subsets.",
        "Return the solution in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [1,2,3]",
        output: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]",
      },
      {
        input: "nums = [0]",
        output: "[[],[0]]",
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 10",
      "-10 ≤ nums[i] ≤ 10",
      "All the numbers of nums are unique",
    ],
    starterCode: {
      javascript: `function subsets(nums) {
  // Write your solution here

}

// Test cases
console.log(subsets([1,2,3])); // Expected: all subsets
console.log(subsets([0])); // Expected: [[],[0]]`,
      python: `def subsets(nums):
    # Write your solution here
    pass

# Test cases
print(subsets([1,2,3]))  # Expected: all subsets
print(subsets([0]))  # Expected: [[],[0]]`,
      java: `import java.util.*;

class Solution {
    public static List<List<Integer>> subsets(int[] nums) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(subsets(new int[]{1,2,3}));
        System.out.println(subsets(new int[]{0}));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> subsets(vector<int>& nums) {
    // Write your solution here
    return {};
}

int main() {
    vector<int> v1 = {1,2,3};
    vector<int> v2 = {0};

    auto r1 = subsets(v1);
    auto r2 = subsets(v2);

    cout << r1.size() << endl;
    cout << r2.size() << endl;
}`,
      csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static IList<IList<int>> Subsets(int[] nums) {
        // Write your solution here
        return new List<IList<int>>();
    }

    static void Main() {
        var r1 = Subsets(new int[]{1,2,3});
        var r2 = Subsets(new int[]{0});

        Console.WriteLine(r1.Count);
        Console.WriteLine(r2.Count);
    }
}`,
      c: `#include <stdio.h>

// Placeholder for subsets generation

void subsets(int nums[], int n) {
    // Write your solution here
}

int main() {
    int a1[] = {1,2,3};
    int a2[] = {0};

    subsets(a1, 3);
    subsets(a2, 1);

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "All subsets printed",
      python: "All subsets printed",
      java: "All subsets printed",
      cpp: "8\n2",
      csharp: "8\n2",
      c: "Subsets generated",
    },
  },
  "combination-sum": {
    id: "combination-sum",
    title: "Combination Sum",
    difficulty: "Medium",
    category: "Backtracking • Array",
    description: {
      text: "Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target.",
      notes: [
        "You may return the combinations in any order.",
        "The same number may be chosen from candidates an unlimited number of times.",
        "Two combinations are unique if the frequency of at least one of the chosen numbers is different.",
      ],
    },
    examples: [
      {
        input: "candidates = [2,3,6,7], target = 7",
        output: "[[2,2,3],[7]]",
      },
      {
        input: "candidates = [2,3,5], target = 8",
        output: "[[2,2,2,2],[2,3,3],[3,5]]",
      },
      {
        input: "candidates = [2], target = 1",
        output: "[]",
      },
    ],
    constraints: [
      "1 ≤ candidates.length ≤ 30",
      "2 ≤ candidates[i] ≤ 40",
      "All elements of candidates are distinct",
      "1 ≤ target ≤ 40",
    ],
    starterCode: {
      javascript: `function combinationSum(candidates, target) {
  // Write your solution here

}

// Test cases
console.log(combinationSum([2,3,6,7], 7)); // Expected: [[2,2,3],[7]]
console.log(combinationSum([2,3,5], 8)); // Expected: [[2,2,2,2],[2,3,3],[3,5]]`,
      python: `def combinationSum(candidates, target):
    # Write your solution here
    pass

# Test cases
print(combinationSum([2,3,6,7], 7))  # Expected: [[2,2,3],[7]]
print(combinationSum([2,3,5], 8))  # Expected: [[2,2,2,2],[2,3,3],[3,5]]`,
      java: `import java.util.*;

class Solution {
    public static List<List<Integer>> combinationSum(int[] candidates, int target) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(combinationSum(new int[]{2,3,6,7}, 7));
        System.out.println(combinationSum(new int[]{2,3,5}, 8));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
    // Write your solution here
    return {};
}

int main() {
    vector<int> c1 = {2,3,6,7};
    vector<int> c2 = {2,3,5};

    auto r1 = combinationSum(c1, 7);
    auto r2 = combinationSum(c2, 8);

    cout << r1.size() << endl;
    cout << r2.size() << endl;
}`,
      csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static IList<IList<int>> CombinationSum(int[] candidates, int target) {
        // Write your solution here
        return new List<IList<int>>();
    }

    static void Main() {
        var r1 = CombinationSum(new int[]{2,3,6,7}, 7);
        var r2 = CombinationSum(new int[]{2,3,5}, 8);

        Console.WriteLine(r1.Count);
        Console.WriteLine(r2.Count);
    }
}`,
      c: `#include <stdio.h>

// Placeholder for combination sum

void combinationSum(int candidates[], int n, int target) {
    // Write your solution here
}

int main() {
    int c1[] = {2,3,6,7};
    int c2[] = {2,3,5};

    combinationSum(c1, 4, 7);
    combinationSum(c2, 3, 8);

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[[2,2,3],[7]]\n[[2,2,2,2],[2,3,3],[3,5]]",
      python: "[[2, 2, 3], [7]]\n[[2, 2, 2, 2], [2, 3, 3], [3, 5]]",
      java: "[[2, 2, 3], [7]]\n[[2, 2, 2, 2], [2, 3, 3], [3, 5]]",
      cpp: "2\n3",
      csharp: "2\n3",
      c: "Combinations generated",
    },
  },
  "combination-sum-ii": {
    id: "combination-sum-ii",
    title: "Combination Sum II",
    difficulty: "Medium",
    category: "Backtracking • Array",
    description: {
      text: "Given a collection of candidate numbers candidates and a target number target, find all unique combinations in candidates where the candidate numbers sum to target.",
      notes: [
        "Each number in candidates may only be used once in the combination.",
        "The solution set must not contain duplicate combinations.",
      ],
    },
    examples: [
      {
        input: "candidates = [10,1,2,7,6,1,5], target = 8",
        output: "[[1,1,6],[1,2,5],[1,7],[2,6]]",
      },
      {
        input: "candidates = [2,5,2,1,2], target = 5",
        output: "[[1,2,2],[5]]",
      },
    ],
    constraints: [
      "1 ≤ candidates.length ≤ 100",
      "1 ≤ candidates[i] ≤ 50",
      "1 ≤ target ≤ 30",
    ],
    starterCode: {
      javascript: `function combinationSum2(candidates, target) {
  // Write your solution here

}

// Test cases
console.log(combinationSum2([10,1,2,7,6,1,5], 8)); // Expected: [[1,1,6],[1,2,5],[1,7],[2,6]]
console.log(combinationSum2([2,5,2,1,2], 5)); // Expected: [[1,2,2],[5]]`,
      python: `def combinationSum2(candidates, target):
    # Write your solution here
    pass

# Test cases
print(combinationSum2([10,1,2,7,6,1,5], 8))  # Expected: [[1,1,6],[1,2,5],[1,7],[2,6]]
print(combinationSum2([2,5,2,1,2], 5))  # Expected: [[1,2,2],[5]]`,
      java: `import java.util.*;

class Solution {
    public static List<List<Integer>> combinationSum2(int[] candidates, int target) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(combinationSum2(new int[]{10,1,2,7,6,1,5}, 8));
        System.out.println(combinationSum2(new int[]{2,5,2,1,2}, 5));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {
    // Write your solution here
    return {};
}

int main() {
    vector<int> c1 = {10,1,2,7,6,1,5};
    vector<int> c2 = {2,5,2,1,2};

    auto r1 = combinationSum2(c1, 8);
    auto r2 = combinationSum2(c2, 5);

    cout << r1.size() << endl;
    cout << r2.size() << endl;
}`,
      csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static IList<IList<int>> CombinationSum2(int[] candidates, int target) {
        // Write your solution here
        return new List<IList<int>>();
    }

    static void Main() {
        var r1 = CombinationSum2(new int[]{10,1,2,7,6,1,5}, 8);
        var r2 = CombinationSum2(new int[]{2,5,2,1,2}, 5);

        Console.WriteLine(r1.Count);
        Console.WriteLine(r2.Count);
    }
}`,
      c: `#include <stdio.h>

// Placeholder for combination sum II

void combinationSum2(int candidates[], int n, int target) {
    // Write your solution here
}

int main() {
    int c1[] = {10,1,2,7,6,1,5};
    int c2[] = {2,5,2,1,2};

    combinationSum2(c1, 7, 8);
    combinationSum2(c2, 5, 5);

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[[1,1,6],[1,2,5],[1,7],[2,6]]\n[[1,2,2],[5]]",
      python: "[[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]]\n[[1, 2, 2], [5]]",
      java: "[[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]]\n[[1, 2, 2], [5]]",
      cpp: "4\n2",
      csharp: "4\n2",
      c: "Combinations generated",
    },
  },
  permutations: {
    id: "permutations",
    title: "Permutations",
    difficulty: "Medium",
    category: "Backtracking • Array",
    description: {
      text: "Given an array nums of distinct integers, return all the possible permutations.",
      notes: ["You can return the answer in any order."],
    },
    examples: [
      {
        input: "nums = [1,2,3]",
        output: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
      },
      {
        input: "nums = [0,1]",
        output: "[[0,1],[1,0]]",
      },
      {
        input: "nums = [1]",
        output: "[[1]]",
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 6",
      "-10 ≤ nums[i] ≤ 10",
      "All the integers of nums are unique",
    ],
    starterCode: {
      javascript: `function permute(nums) {
  // Write your solution here

}

// Test cases
console.log(permute([1,2,3])); // Expected: all permutations
console.log(permute([0,1])); // Expected: [[0,1],[1,0]]`,
      python: `def permute(nums):
    # Write your solution here
    pass

# Test cases
print(permute([1,2,3]))  # Expected: all permutations
print(permute([0,1]))  # Expected: [[0,1],[1,0]]`,
      java: `import java.util.*;

class Solution {
    public static List<List<Integer>> permute(int[] nums) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(permute(new int[]{1,2,3}));
        System.out.println(permute(new int[]{0,1}));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> permute(vector<int>& nums) {
    // Write your solution here
    return {};
}

int main() {
    vector<int> v1 = {1,2,3};
    vector<int> v2 = {0,1};

    auto r1 = permute(v1);
    auto r2 = permute(v2);

    cout << r1.size() << endl;
    cout << r2.size() << endl;
}`,
      csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static IList<IList<int>> Permute(int[] nums) {
        // Write your solution here
        return new List<IList<int>>();
    }

    static void Main() {
        var r1 = Permute(new int[]{1,2,3});
        var r2 = Permute(new int[]{0,1});

        Console.WriteLine(r1.Count);
        Console.WriteLine(r2.Count);
    }
}`,
      c: `#include <stdio.h>

// Placeholder for permutations

void permute(int nums[], int n) {
    // Write your solution here
}

int main() {
    int a1[] = {1,2,3};
    int a2[] = {0,1};

    permute(a1, 3);
    permute(a2, 2);

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "All permutations printed",
      python: "All permutations printed",
      java: "All permutations printed",
      cpp: "6\n2",
      csharp: "6\n2",
      c: "Permutations generated",
    },
  },
  "subsets-ii": {
    id: "subsets-ii",
    title: "Subsets II",
    difficulty: "Medium",
    category: "Backtracking • Array",
    description: {
      text: "Given an integer array nums that may contain duplicates, return all possible subsets (the power set).",
      notes: [
        "The solution set must not contain duplicate subsets.",
        "Return the solution in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [1,2,2]",
        output: "[[],[1],[2],[1,2],[2,2],[1,2,2]]",
      },
      {
        input: "nums = [0]",
        output: "[[],[0]]",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10", "-10 ≤ nums[i] ≤ 10"],
    starterCode: {
      javascript: `function subsetsWithDup(nums) {
  // Write your solution here

}

// Test cases
console.log(subsetsWithDup([1,2,2])); // Expected: all unique subsets
console.log(subsetsWithDup([0])); // Expected: [[],[0]]`,
      python: `def subsetsWithDup(nums):
    # Write your solution here
    pass

# Test cases
print(subsetsWithDup([1,2,2]))  # Expected: all unique subsets
print(subsetsWithDup([0]))  # Expected: [[],[0]]`,
      java: `import java.util.*;

class Solution {
    public static List<List<Integer>> subsetsWithDup(int[] nums) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(subsetsWithDup(new int[]{1,2,2}));
        System.out.println(subsetsWithDup(new int[]{0}));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> subsetsWithDup(vector<int>& nums) {
    // Write your solution here
    return {};
}

int main() {
    vector<int> v1 = {1,2,2};
    vector<int> v2 = {0};

    auto r1 = subsetsWithDup(v1);
    auto r2 = subsetsWithDup(v2);

    cout << r1.size() << endl;
    cout << r2.size() << endl;
}`,
      csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static IList<IList<int>> SubsetsWithDup(int[] nums) {
        // Write your solution here
        return new List<IList<int>>();
    }

    static void Main() {
        var r1 = SubsetsWithDup(new int[]{1,2,2});
        var r2 = SubsetsWithDup(new int[]{0});

        Console.WriteLine(r1.Count);
        Console.WriteLine(r2.Count);
    }
}`,
      c: `#include <stdio.h>

// Placeholder for subsets II

void subsetsWithDup(int nums[], int n) {
    // Write your solution here
}

int main() {
    int a1[] = {1,2,2};
    int a2[] = {0};

    subsetsWithDup(a1, 3);
    subsetsWithDup(a2, 1);

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "All unique subsets printed",
      python: "All unique subsets printed",
      java: "All unique subsets printed",
      cpp: "6\n2",
      csharp: "6\n2",
      c: "Subsets generated",
    },
  },
  "generate-parentheses": {
    id: "generate-parentheses",
    title: "Generate Parentheses",
    difficulty: "Medium",
    category: "Backtracking • String",
    description: {
      text: "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
      notes: [],
    },
    examples: [
      {
        input: "n = 3",
        output: '["((()))","(()())","(())()","()(())","()()()"]',
      },
      {
        input: "n = 1",
        output: '["()"]',
      },
    ],
    constraints: ["1 ≤ n ≤ 8"],
    starterCode: {
      javascript: `function generateParenthesis(n) {
  // Write your solution here

}

// Test cases
console.log(generateParenthesis(3)); // Expected: all combinations
console.log(generateParenthesis(1)); // Expected: ["()"]`,
      python: `def generateParenthesis(n):
    # Write your solution here
    pass

# Test cases
print(generateParenthesis(3))  # Expected: all combinations
print(generateParenthesis(1))  # Expected: ["()"]`,
      java: `import java.util.*;

class Solution {
    public static List<String> generateParenthesis(int n) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(generateParenthesis(3));
        System.out.println(generateParenthesis(1));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<string> generateParenthesis(int n) {
    // Write your solution here
    return {};
}

int main() {
    auto r1 = generateParenthesis(3);
    auto r2 = generateParenthesis(1);

    cout << r1.size() << endl;
    cout << r2.size() << endl;
}`,
      csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static IList<string> GenerateParenthesis(int n) {
        // Write your solution here
        return new List<string>();
    }

    static void Main() {
        var r1 = GenerateParenthesis(3);
        var r2 = GenerateParenthesis(1);

        Console.WriteLine(r1.Count);
        Console.WriteLine(r2.Count);
    }
}`,
      c: `#include <stdio.h>

// Placeholder for generate parentheses

void generateParenthesis(int n) {
    // Write your solution here
}

int main() {
    generateParenthesis(3);
    generateParenthesis(1);
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "All combinations printed",
      python: "All combinations printed",
      java: "All combinations printed",
      cpp: "5\n1",
      csharp: "5\n1",
      c: "Parentheses generated",
    },
  },
  "word-search": {
    id: "word-search",
    title: "Word Search",
    difficulty: "Medium",
    category: "Backtracking • Matrix",
    description: {
      text: "Given an m x n grid of characters board and a string word, return true if word exists in the grid.",
      notes: [
        "The word can be constructed from letters of sequentially adjacent cells.",
        "Adjacent cells are horizontally or vertically neighboring.",
        "The same letter cell may not be used more than once.",
      ],
    },
    examples: [
      {
        input:
          'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"',
        output: "true",
      },
      {
        input:
          'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"',
        output: "true",
      },
      {
        input:
          'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"',
        output: "false",
      },
    ],
    constraints: [
      "m == board.length",
      "n = board[i].length",
      "1 ≤ m, n ≤ 6",
      "1 ≤ word.length ≤ 15",
      "board and word consists of only lowercase and uppercase English letters",
    ],
    starterCode: {
      javascript: `function exist(board, word) {
  // Write your solution here

}

// Test cases
console.log(exist([
  ["A","B","C","E"],
  ["S","F","C","S"],
  ["A","D","E","E"]
], "ABCCED")); // Expected: true

console.log(exist([
  ["A","B","C","E"],
  ["S","F","C","S"],
  ["A","D","E","E"]
], "ABCB")); // Expected: false`,
      python: `def exist(board, word):
    # Write your solution here
    pass

# Test cases
print(exist([
  ["A","B","C","E"],
  ["S","F","C","S"],
  ["A","D","E","E"]
], "ABCCED"))

print(exist([
  ["A","B","C","E"],
  ["S","F","C","S"],
  ["A","D","E","E"]
], "ABCB"))`,
      java: `class Solution {
    public static boolean exist(char[][] board, String word) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        char[][] board = {
            {'A','B','C','E'},
            {'S','F','C','S'},
            {'A','D','E','E'}
        };

        System.out.println(exist(board, "ABCCED"));
        System.out.println(exist(board, "ABCB"));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

bool exist(vector<vector<char>>& board, string word) {
    // Write your solution here
    return false;
}

int main() {
    vector<vector<char>> board = {
        {'A','B','C','E'},
        {'S','F','C','S'},
        {'A','D','E','E'}
    };

    cout << exist(board, "ABCCED") << endl;
    cout << exist(board, "ABCB") << endl;
}`,
      csharp: `using System;

class Solution {
    public static bool Exist(char[][] board, string word) {
        // Write your solution here
        return false;
    }

    static void Main() {
        char[][] board = new char[][] {
            new char[]{'A','B','C','E'},
            new char[]{'S','F','C','S'},
            new char[]{'A','D','E','E'}
        };

        Console.WriteLine(Exist(board, "ABCCED"));
        Console.WriteLine(Exist(board, "ABCB"));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for word search

int exist(char board[][4], int m, int n, char* word) {
    // Write your solution here
    return 0;
}

int main() {
    char board[3][4] = {
        {'A','B','C','E'},
        {'S','F','C','S'},
        {'A','D','E','E'}
    };

    printf("%d\n", exist(board, 3, 4, "ABCCED"));
    printf("%d\n", exist(board, 3, 4, "ABCB"));

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
      cpp: "1\n0",
      csharp: "True\nFalse",
      c: "1\n0",
    },
  },
  "palindrome-partitioning": {
    id: "palindrome-partitioning",
    title: "Palindrome Partitioning",
    difficulty: "Medium",
    category: "Backtracking • String",
    description: {
      text: "Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.",
      notes: [],
    },
    examples: [
      {
        input: 's = "aab"',
        output: '[["a","a","b"],["aa","b"]]',
      },
      {
        input: 's = "a"',
        output: '[["a"]]',
      },
    ],
    constraints: [
      "1 ≤ s.length ≤ 16",
      "s contains only lowercase English letters",
    ],
    starterCode: {
      javascript: `function partition(s) {
  // Write your solution here

}

// Test cases
console.log(partition("aab")); // Expected: [["a","a","b"],["aa","b"]]
console.log(partition("a")); // Expected: [["a"]]`,
      python: `def partition(s):
    # Write your solution here
    pass

# Test cases
print(partition("aab"))  # Expected: [["a","a","b"],["aa","b"]]
print(partition("a"))  # Expected: [["a"]]`,
      java: `import java.util.*;

class Solution {
    public static List<List<String>> partition(String s) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(partition("aab"));
        System.out.println(partition("a"));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

vector<vector<string>> partition(string s) {
    // Write your solution here
    return {};
}

int main() {
    auto r1 = partition("aab");
    auto r2 = partition("a");

    cout << r1.size() << endl;
    cout << r2.size() << endl;
}`,
      csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static IList<IList<string>> Partition(string s) {
        // Write your solution here
        return new List<IList<string>>();
    }

    static void Main() {
        var r1 = Partition("aab");
        var r2 = Partition("a");

        Console.WriteLine(r1.Count);
        Console.WriteLine(r2.Count);
    }
}`,
      c: `#include <stdio.h>

// Placeholder for palindrome partitioning

void partition(char* s) {
    // Write your solution here
}

int main() {
    partition("aab");
    partition("a");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: '[["a","a","b"],["aa","b"]]\n[["a"]]',
      python: "[['a', 'a', 'b'], ['aa', 'b']]\n[['a']]",
      java: "[[a, a, b], [aa, b]]\n[[a]]",
      cpp: "2\n1",
      csharp: "2\n1",
      c: "Partitions generated",
    },
  },
  "letter-combinations-of-a-phone-number": {
    id: "letter-combinations-of-a-phone-number",
    title: "Letter Combinations of a Phone Number",
    difficulty: "Medium",
    category: "Backtracking • String",
    description: {
      text: "Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.",
      notes: [
        "Return the answer in any order.",
        "A mapping of digits to letters (just like on the telephone buttons) is given below.",
        "1 does not map to any letters.",
      ],
    },
    examples: [
      {
        input: 'digits = "23"',
        output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]',
      },
      {
        input: 'digits = ""',
        output: "[]",
      },
      {
        input: 'digits = "2"',
        output: '["a","b","c"]',
      },
    ],
    constraints: [
      "0 ≤ digits.length ≤ 4",
      "digits[i] is a digit in the range ['2', '9']",
    ],
    starterCode: {
      javascript: `function letterCombinations(digits) {
  // Write your solution here

}

// Test cases
console.log(letterCombinations("23")); // Expected: all combinations
console.log(letterCombinations("")); // Expected: []
console.log(letterCombinations("2")); // Expected: ["a","b","c"]`,
      python: `def letterCombinations(digits):
    # Write your solution here
    pass

# Test cases
print(letterCombinations("23"))  # Expected: all combinations
print(letterCombinations(""))  # Expected: []
print(letterCombinations("2"))  # Expected: ["a","b","c"]`,
      java: `import java.util.*;

class Solution {
    public static List<String> letterCombinations(String digits) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(letterCombinations("23"));
        System.out.println(letterCombinations(""));
        System.out.println(letterCombinations("2"));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

vector<string> letterCombinations(string digits) {
    // Write your solution here
    return {};
}

int main() {
    auto r1 = letterCombinations("23");
    auto r2 = letterCombinations("");
    auto r3 = letterCombinations("2");

    cout << r1.size() << endl;
    cout << r2.size() << endl;
    cout << r3.size() << endl;
}`,
      csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static IList<string> LetterCombinations(string digits) {
        // Write your solution here
        return new List<string>();
    }

    static void Main() {
        var r1 = LetterCombinations("23");
        var r2 = LetterCombinations("");
        var r3 = LetterCombinations("2");

        Console.WriteLine(r1.Count);
        Console.WriteLine(r2.Count);
        Console.WriteLine(r3.Count);
    }
}`,
      c: `#include <stdio.h>

// Placeholder for letter combinations

void letterCombinations(char* digits) {
    // Write your solution here
}

int main() {
    letterCombinations("23");
    letterCombinations("");
    letterCombinations("2");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: 'All combinations printed\n[]\n["a","b","c"]',
      python: "All combinations printed\n[]\n['a', 'b', 'c']",
      java: "All combinations printed\n[]\n[a, b, c]",
      cpp: "9\n0\n3",
      csharp: "9\n0\n3",
      c: "Combinations generated",
    },
  },
  "n-queens": {
    id: "n-queens",
    title: "N-Queens",
    difficulty: "Hard",
    category: "Backtracking • Array",
    description: {
      text: "The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.",
      notes: [
        "Given an integer n, return all distinct solutions to the n-queens puzzle.",
        "Each solution contains a distinct board configuration of the n-queens' placement.",
        "Each 'Q' and '.' both indicate a queen and an empty space, respectively.",
      ],
    },
    examples: [
      {
        input: "n = 4",
        output: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]',
      },
      {
        input: "n = 1",
        output: '[["Q"]]',
      },
    ],
    constraints: ["1 ≤ n ≤ 9"],
    starterCode: {
      javascript: `function solveNQueens(n) {
  // Write your solution here

}

// Test cases
console.log(solveNQueens(4)); // Expected: all solutions
console.log(solveNQueens(1)); // Expected: [["Q"]]`,
      python: `def solveNQueens(n):
    # Write your solution here
    pass

# Test cases
print(solveNQueens(4))  # Expected: all solutions
print(solveNQueens(1))  # Expected: [["Q"]]`,
      java: `import java.util.*;

class Solution {
    public static List<List<String>> solveNQueens(int n) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(solveNQueens(4));
        System.out.println(solveNQueens(1));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

vector<vector<string>> solveNQueens(int n) {
    // Write your solution here
    return {};
}

int main() {
    auto r1 = solveNQueens(4);
    auto r2 = solveNQueens(1);

    cout << r1.size() << endl;
    cout << r2.size() << endl;
}`,
      csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static IList<IList<string>> SolveNQueens(int n) {
        // Write your solution here
        return new List<IList<string>>();
    }

    static void Main() {
        var r1 = SolveNQueens(4);
        var r2 = SolveNQueens(1);

        Console.WriteLine(r1.Count);
        Console.WriteLine(r2.Count);
    }
}`,
      c: `#include <stdio.h>

// Placeholder for N-Queens

void solveNQueens(int n) {
    // Write your solution here
}

int main() {
    solveNQueens(4);
    solveNQueens(1);
    return 0;
}`,
    },
    expectedOutput: {
      javascript: 'All solutions printed\n[["Q"]]',
      python: "All solutions printed\n[['Q']]",
      java: "All solutions printed\n[[Q]]",
      cpp: "2\n1",
      csharp: "2\n1",
      c: "Solutions generated",
    },
  },

  //Tries
  "implement-trie-prefix-tree": {
    id: "implement-trie-prefix-tree",
    title: "Implement Trie (Prefix Tree)",
    difficulty: "Medium",
    category: "Trie • Design • String",
    description: {
      text: "A trie (pronounced as 'try') or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings.",
      notes: [
        "Implement the Trie class:",
        "Trie() Initializes the trie object.",
        "void insert(String word) Inserts the string word into the trie.",
        "boolean search(String word) Returns true if the string word is in the trie.",
        "boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix.",
      ],
    },
    examples: [
      {
        input:
          '["Trie","insert","search","search","startsWith","insert","search"]\n[[],["apple"],["apple"],["app"],["app"],["app"],["app"]]',
        output: "[null,null,true,false,true,null,true]",
      },
    ],
    constraints: [
      "1 ≤ word.length, prefix.length ≤ 2000",
      "word and prefix consist only of lowercase English letters",
      "At most 3 * 10⁴ calls in total will be made to insert, search, and startsWith",
    ],
    starterCode: {
      javascript: `class Trie {
  constructor() {
    
  }

  insert(word) {
    // Write your solution here
  }

  search(word) {
    // Write your solution here
  }

  startsWith(prefix) {
    // Write your solution here
  }
}

// Test cases
let trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));   // Expected: true
console.log(trie.search("app"));     // Expected: false
console.log(trie.startsWith("app")); // Expected: true
trie.insert("app");
console.log(trie.search("app"));     // Expected: true`,
      python: `class Trie:
    def __init__(self):
        pass

    def insert(self, word):
        # Write your solution here
        pass

    def search(self, word):
        # Write your solution here
        pass

    def startsWith(self, prefix):
        # Write your solution here
        pass

# Test cases
trie = Trie()
trie.insert("apple")
print(trie.search("apple"))
print(trie.search("app"))
print(trie.startsWith("app"))
trie.insert("app")
print(trie.search("app"))`,
      java: `class Trie {

    public Trie() {
        
    }

    public void insert(String word) {
        // Write your solution here
    }

    public boolean search(String word) {
        // Write your solution here
        return false;
    }

    public boolean startsWith(String prefix) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        Trie trie = new Trie();
        trie.insert("apple");
        System.out.println(trie.search("apple"));
        System.out.println(trie.search("app"));
        System.out.println(trie.startsWith("app"));
        trie.insert("app");
        System.out.println(trie.search("app"));
    }
}`,
      cpp: `#include <iostream>
using namespace std;

class Trie {
public:
    Trie() {
        
    }

    void insert(string word) {
        // Write your solution here
    }

    bool search(string word) {
        // Write your solution here
        return false;
    }

    bool startsWith(string prefix) {
        // Write your solution here
        return false;
    }
};

int main() {
    Trie trie;
    trie.insert("apple");
    cout << trie.search("apple") << endl;
    cout << trie.search("app") << endl;
    cout << trie.startsWith("app") << endl;
    trie.insert("app");
    cout << trie.search("app") << endl;
}`,
      csharp: `using System;

class Trie {

    public Trie() {
        
    }

    public void Insert(string word) {
        // Write your solution here
    }

    public bool Search(string word) {
        // Write your solution here
        return false;
    }

    public bool StartsWith(string prefix) {
        // Write your solution here
        return false;
    }

    static void Main() {
        Trie trie = new Trie();
        trie.Insert("apple");
        Console.WriteLine(trie.Search("apple"));
        Console.WriteLine(trie.Search("app"));
        Console.WriteLine(trie.StartsWith("app"));
        trie.Insert("app");
        Console.WriteLine(trie.Search("app"));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for Trie implementation

int main() {
    printf("Trie execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue\ntrue",
      python: "True\nFalse\nTrue\nTrue",
      java: "true\nfalse\ntrue\ntrue",
      cpp: "1\n0\n1\n1",
      csharp: "True\nFalse\nTrue\nTrue",
      c: "Trie execution",
    },
  },
  "design-add-and-search-words-data-structure": {
    id: "design-add-and-search-words-data-structure",
    title: "Design Add and Search Words Data Structure",
    difficulty: "Medium",
    category: "Trie • Design • Backtracking",
    description: {
      text: "Design a data structure that supports adding new words and finding if a string matches any previously added string.",
      notes: [
        "Implement the WordDictionary class:",
        "WordDictionary() Initializes the object.",
        "void addWord(word) Adds word to the data structure.",
        "bool search(word) Returns true if there is any string in the data structure that matches word.",
        "word may contain dots '.' where dots can match any letter.",
      ],
    },
    examples: [
      {
        input:
          '["WordDictionary","addWord","addWord","addWord","search","search","search","search"]\n[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]',
        output: "[null,null,null,null,false,true,true,true]",
      },
    ],
    constraints: [
      "1 ≤ word.length ≤ 25",
      "word in addWord consists of lowercase English letters",
      "word in search consist of '.' or lowercase English letters",
      "At most 10⁴ calls will be made to addWord and search",
    ],
    starterCode: {
      javascript: `class WordDictionary {
  constructor() {
    
  }

  addWord(word) {
    // Write your solution here
  }

  search(word) {
    // Write your solution here
  }
}

// Test cases
let wd = new WordDictionary();
wd.addWord("bad");
wd.addWord("dad");
wd.addWord("mad");
console.log(wd.search("pad")); // Expected: false
console.log(wd.search("bad")); // Expected: true
console.log(wd.search(".ad")); // Expected: true
console.log(wd.search("b..")); // Expected: true`,
      python: `class WordDictionary:
    def __init__(self):
        pass

    def addWord(self, word):
        # Write your solution here
        pass

    def search(self, word):
        # Write your solution here
        pass

# Test cases
wd = WordDictionary()
wd.addWord("bad")
wd.addWord("dad")
wd.addWord("mad")
print(wd.search("pad"))
print(wd.search("bad"))
print(wd.search(".ad"))
print(wd.search("b.."))`,
      java: `class WordDictionary {

    public WordDictionary() {
        
    }

    public void addWord(String word) {
        // Write your solution here
    }

    public boolean search(String word) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        WordDictionary wd = new WordDictionary();
        wd.addWord("bad");
        wd.addWord("dad");
        wd.addWord("mad");
        System.out.println(wd.search("pad"));
        System.out.println(wd.search("bad"));
        System.out.println(wd.search(".ad"));
        System.out.println(wd.search("b.."));
    }
}`,
      cpp: `#include <iostream>
using namespace std;

class WordDictionary {
public:
    WordDictionary() {
        
    }

    void addWord(string word) {
        // Write your solution here
    }

    bool search(string word) {
        // Write your solution here
        return false;
    }
};

int main() {
    WordDictionary wd;
    wd.addWord("bad");
    wd.addWord("dad");
    wd.addWord("mad");
    cout << wd.search("pad") << endl;
    cout << wd.search("bad") << endl;
    cout << wd.search(".ad") << endl;
    cout << wd.search("b..") << endl;
}`,
      csharp: `using System;

class WordDictionary {

    public WordDictionary() {
        
    }

    public void AddWord(string word) {
        // Write your solution here
    }

    public bool Search(string word) {
        // Write your solution here
        return false;
    }

    static void Main() {
        WordDictionary wd = new WordDictionary();
        wd.AddWord("bad");
        wd.AddWord("dad");
        wd.AddWord("mad");
        Console.WriteLine(wd.Search("pad"));
        Console.WriteLine(wd.Search("bad"));
        Console.WriteLine(wd.Search(".ad"));
        Console.WriteLine(wd.Search("b.."));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for WordDictionary

int main() {
    printf("WordDictionary execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "false\ntrue\ntrue\ntrue",
      python: "False\nTrue\nTrue\nTrue",
      java: "false\ntrue\ntrue\ntrue",
      cpp: "0\n1\n1\n1",
      csharp: "False\nTrue\nTrue\nTrue",
      c: "WordDictionary execution",
    },
  },
  "word-search-ii": {
    id: "word-search-ii",
    title: "Word Search II",
    difficulty: "Hard",
    category: "Backtracking • Trie • Matrix",
    description: {
      text: "Given an m x n board of characters and a list of strings words, return all words on the board.",
      notes: [
        "Each word must be constructed from letters of sequentially adjacent cells.",
        "Adjacent cells are horizontally or vertically neighboring.",
        "The same letter cell may not be used more than once in a word.",
      ],
    },
    examples: [
      {
        input:
          'board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]',
        output: '["eat","oath"]',
      },
      {
        input: 'board = [["a","b"],["c","d"]], words = ["abcb"]',
        output: "[]",
      },
    ],
    constraints: [
      "m == board.length",
      "n == board[i].length",
      "1 ≤ m, n ≤ 12",
      "1 ≤ words.length ≤ 3 * 10⁴",
      "1 ≤ words[i].length ≤ 10",
      "board[i][j] is a lowercase English letter",
      "words[i] consists of lowercase English letters",
    ],
    starterCode: {
      javascript: `function findWords(board, words) {
  // Write your solution here

}

// Test cases
console.log(findWords([
  ["o","a","a","n"],
  ["e","t","a","e"],
  ["i","h","k","r"],
  ["i","f","l","v"]
], ["oath","pea","eat","rain"])); // Expected: ["eat","oath"]

console.log(findWords([
  ["a","b"],
  ["c","d"]
], ["abcb"])); // Expected: []`,
      python: `def findWords(board, words):
    # Write your solution here
    pass

# Test cases
print(findWords([
  ["o","a","a","n"],
  ["e","t","a","e"],
  ["i","h","k","r"],
  ["i","f","l","v"]
], ["oath","pea","eat","rain"]))

print(findWords([
  ["a","b"],
  ["c","d"]
], ["abcb"]))`,
      java: `import java.util.*;

class Solution {
    public static List<String> findWords(char[][] board, String[] words) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        char[][] board = {
            {'o','a','a','n'},
            {'e','t','a','e'},
            {'i','h','k','r'},
            {'i','f','l','v'}
        };

        System.out.println(findWords(board, new String[]{"oath","pea","eat","rain"}));
        System.out.println(findWords(new char[][]{{'a','b'},{'c','d'}}, new String[]{"abcb"}));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

vector<string> findWords(vector<vector<char>>& board, vector<string>& words) {
    // Write your solution here
    return {};
}

int main() {
    vector<vector<char>> board = {
        {'o','a','a','n'},
        {'e','t','a','e'},
        {'i','h','k','r'},
        {'i','f','l','v'}
    };

    vector<string> words = {"oath","pea","eat","rain"};
    vector<string> words2 = {"abcb"};

    auto r1 = findWords(board, words);
    auto r2 = findWords({{'a','b'},{'c','d'}}, words2);

    cout << r1.size() << endl;
    cout << r2.size() << endl;
}`,
      csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static IList<string> FindWords(char[][] board, string[] words) {
        // Write your solution here
        return new List<string>();
    }

    static void Main() {
        char[][] board = new char[][] {
            new char[]{'o','a','a','n'},
            new char[]{'e','t','a','e'},
            new char[]{'i','h','k','r'},
            new char[]{'i','f','l','v'}
        };

        var r1 = FindWords(board, new string[]{"oath","pea","eat","rain"});
        var r2 = FindWords(new char[][] {
            new char[]{'a','b'},
            new char[]{'c','d'}
        }, new string[]{"abcb"});

        Console.WriteLine(r1.Count);
        Console.WriteLine(r2.Count);
    }
}`,
      c: `#include <stdio.h>

// Placeholder for Word Search II

void findWords() {
    // Write your solution here
}

int main() {
    printf("Word Search II execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: '["eat","oath"]\n[]',
      python: "['eat', 'oath']\n[]",
      java: "[eat, oath]\n[]",
      cpp: "2\n0",
      csharp: "2\n0",
      c: "Word Search II execution",
    },
  },

  //Graphs
  "number-of-islands": {
    id: "number-of-islands",
    title: "Number of Islands",
    difficulty: "Medium",
    category: "Graph • DFS • BFS • Matrix",
    description: {
      text: "Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.",
      notes: [
        "An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.",
        "You may assume all four edges of the grid are all surrounded by water.",
      ],
    },
    examples: [
      {
        input:
          'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]',
        output: "1",
      },
      {
        input:
          'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]',
        output: "3",
      },
    ],
    constraints: [
      "m == grid.length",
      "n == grid[i].length",
      "1 ≤ m, n ≤ 300",
      "grid[i][j] is '0' or '1'",
    ],
    starterCode: {
      javascript: `function numIslands(grid) {
  // Write your solution here

}

// Test cases
console.log(numIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
])); // Expected: 1

console.log(numIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
])); // Expected: 3`,
      python: `def numIslands(grid):
    # Write your solution here
    pass

# Test cases
print(numIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]))

print(numIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]))`,
      java: `class Solution {
    public static int numIslands(char[][] grid) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        char[][] g1 = {
            {'1','1','1','1','0'},
            {'1','1','0','1','0'},
            {'1','1','0','0','0'},
            {'0','0','0','0','0'}
        };

        char[][] g2 = {
            {'1','1','0','0','0'},
            {'1','1','0','0','0'},
            {'0','0','1','0','0'},
            {'0','0','0','1','1'}
        };

        System.out.println(numIslands(g1));
        System.out.println(numIslands(g2));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int numIslands(vector<vector<char>>& grid) {
    // Write your solution here
    return 0;
}

int main() {
    vector<vector<char>> g1 = {
        {'1','1','1','1','0'},
        {'1','1','0','1','0'},
        {'1','1','0','0','0'},
        {'0','0','0','0','0'}
    };

    vector<vector<char>> g2 = {
        {'1','1','0','0','0'},
        {'1','1','0','0','0'},
        {'0','0','1','0','0'},
        {'0','0','0','1','1'}
    };

    cout << numIslands(g1) << endl;
    cout << numIslands(g2) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int NumIslands(char[][] grid) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        char[][] g1 = new char[][] {
            new char[]{'1','1','1','1','0'},
            new char[]{'1','1','0','1','0'},
            new char[]{'1','1','0','0','0'},
            new char[]{'0','0','0','0','0'}
        };

        char[][] g2 = new char[][] {
            new char[]{'1','1','0','0','0'},
            new char[]{'1','1','0','0','0'},
            new char[]{'0','0','1','0','0'},
            new char[]{'0','0','0','1','1'}
        };

        Console.WriteLine(NumIslands(g1));
        Console.WriteLine(NumIslands(g2));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for number of islands

int numIslands(char grid[][5], int m, int n) {
    // Write your solution here
    return 0;
}

int main() {
    char g1[4][5] = {
        {'1','1','1','1','0'},
        {'1','1','0','1','0'},
        {'1','1','0','0','0'},
        {'0','0','0','0','0'}
    };

    char g2[4][5] = {
        {'1','1','0','0','0'},
        {'1','1','0','0','0'},
        {'0','0','1','0','0'},
        {'0','0','0','1','1'}
    };

    printf("%d\n", numIslands(g1, 4, 5));
    printf("%d\n", numIslands(g2, 4, 5));

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "1\n3",
      python: "1\n3",
      java: "1\n3",
      cpp: "1\n3",
      csharp: "1\n3",
      c: "1\n3",
    },
  },
  "max-area-of-island": {
    id: "max-area-of-island",
    title: "Max Area of Island",
    difficulty: "Medium",
    category: "Graph • DFS • BFS • Matrix",
    description: {
      text: "You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally.",
      notes: [
        "Return the maximum area of an island in grid.",
        "If there is no island, return 0.",
      ],
    },
    examples: [
      {
        input: "grid = [[0,0,1,0,0],[1,1,1,0,0],[0,1,0,0,1],[0,0,0,1,1]]",
        output: "5",
      },
      {
        input: "grid = [[0,0,0],[0,0,0]]",
        output: "0",
      },
    ],
    constraints: [
      "m == grid.length",
      "n == grid[i].length",
      "1 ≤ m, n ≤ 50",
      "grid[i][j] is 0 or 1",
    ],
    starterCode: {
      javascript: `function maxAreaOfIsland(grid) {
  // Write your solution here

}

// Test cases
console.log(maxAreaOfIsland([
  [0,0,1,0,0],
  [1,1,1,0,0],
  [0,1,0,0,1],
  [0,0,0,1,1]
])); // Expected: 5

console.log(maxAreaOfIsland([
  [0,0,0],
  [0,0,0]
])); // Expected: 0`,
      python: `def maxAreaOfIsland(grid):
    # Write your solution here
    pass

# Test cases
print(maxAreaOfIsland([
  [0,0,1,0,0],
  [1,1,1,0,0],
  [0,1,0,0,1],
  [0,0,0,1,1]
]))

print(maxAreaOfIsland([
  [0,0,0],
  [0,0,0]
]))`,
      java: `class Solution {
    public static int maxAreaOfIsland(int[][] grid) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        int[][] g1 = {
            {0,0,1,0,0},
            {1,1,1,0,0},
            {0,1,0,0,1},
            {0,0,0,1,1}
        };

        int[][] g2 = {
            {0,0,0},
            {0,0,0}
        };

        System.out.println(maxAreaOfIsland(g1));
        System.out.println(maxAreaOfIsland(g2));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int maxAreaOfIsland(vector<vector<int>>& grid) {
    // Write your solution here
    return 0;
}

int main() {
    vector<vector<int>> g1 = {
        {0,0,1,0,0},
        {1,1,1,0,0},
        {0,1,0,0,1},
        {0,0,0,1,1}
    };

    vector<vector<int>> g2 = {
        {0,0,0},
        {0,0,0}
    };

    cout << maxAreaOfIsland(g1) << endl;
    cout << maxAreaOfIsland(g2) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int MaxAreaOfIsland(int[][] grid) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        int[][] g1 = new int[][] {
            new int[]{0,0,1,0,0},
            new int[]{1,1,1,0,0},
            new int[]{0,1,0,0,1},
            new int[]{0,0,0,1,1}
        };

        int[][] g2 = new int[][] {
            new int[]{0,0,0},
            new int[]{0,0,0}
        };

        Console.WriteLine(MaxAreaOfIsland(g1));
        Console.WriteLine(MaxAreaOfIsland(g2));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for max area of island

int maxAreaOfIsland(int grid[][5], int m, int n) {
    // Write your solution here
    return 0;
}

int main() {
    int g1[4][5] = {
        {0,0,1,0,0},
        {1,1,1,0,0},
        {0,1,0,0,1},
        {0,0,0,1,1}
    };

    int g2[2][3] = {
        {0,0,0},
        {0,0,0}
    };

    printf("%d\n", maxAreaOfIsland(g1, 4, 5));
    printf("%d\n", maxAreaOfIsland(g2, 2, 3));

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "5\n0",
      python: "5\n0",
      java: "5\n0",
      cpp: "5\n0",
      csharp: "5\n0",
      c: "5\n0",
    },
  },
  "clone-graph": {
    id: "clone-graph",
    title: "Clone Graph",
    difficulty: "Medium",
    category: "Graph • DFS • BFS • Hash Table",
    description: {
      text: "Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.",
      notes: [
        "Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.",
        "All nodes are uniquely labeled.",
      ],
    },
    examples: [
      {
        input: "adjList = [[2,4],[1,3],[2,4],[1,3]]",
        output: "[[2,4],[1,3],[2,4],[1,3]]",
      },
      {
        input: "adjList = [[]]",
        output: "[[]]",
      },
      {
        input: "adjList = []",
        output: "[]",
      },
    ],
    constraints: [
      "The number of nodes in the graph is in the range [0, 100]",
      "1 ≤ Node.val ≤ 100",
      "Node.val is unique for each node",
      "There are no repeated edges and no self-loops in the graph",
      "The Graph is connected and all nodes can be visited starting from the given node",
    ],
    starterCode: {
      javascript: `function Node(val, neighbors = []) {
  this.val = val;
  this.neighbors = neighbors;
}

function cloneGraph(node) {
  // Write your solution here

}

// Test cases
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);

node1.neighbors = [node2, node4];
node2.neighbors = [node1, node3];
node3.neighbors = [node2, node4];
node4.neighbors = [node1, node3];

let cloned = cloneGraph(node1);
console.log(cloned.val); // Expected: 1`,
      python: `class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []

def cloneGraph(node):
    # Write your solution here
    pass

# Test cases
node1 = Node(1)
node2 = Node(2)
node3 = Node(3)
node4 = Node(4)

node1.neighbors = [node2, node4]
node2.neighbors = [node1, node3]
node3.neighbors = [node2, node4]
node4.neighbors = [node1, node3]

cloned = cloneGraph(node1)
print(cloned.val)`,
      java: `import java.util.*;

class Node {
    public int val;
    public List<Node> neighbors;
    public Node() {
        val = 0;
        neighbors = new ArrayList<Node>();
    }
    public Node(int val) {
        this.val = val;
        neighbors = new ArrayList<Node>();
    }
}

class Solution {
    public static Node cloneGraph(Node node) {
        // Write your solution here
        return null;
    }

    public static void main(String[] args) {
        Node node1 = new Node(1);
        Node node2 = new Node(2);
        Node node3 = new Node(3);
        Node node4 = new Node(4);

        node1.neighbors = Arrays.asList(node2, node4);
        node2.neighbors = Arrays.asList(node1, node3);
        node3.neighbors = Arrays.asList(node2, node4);
        node4.neighbors = Arrays.asList(node1, node3);

        Node cloned = cloneGraph(node1);
        System.out.println(cloned.val);
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

class Node {
public:
    int val;
    vector<Node*> neighbors;
    Node() { val = 0; }
    Node(int _val) { val = _val; }
};

Node* cloneGraph(Node* node) {
    // Write your solution here
    return NULL;
}

int main() {
    Node* node1 = new Node(1);
    Node* node2 = new Node(2);
    Node* node3 = new Node(3);
    Node* node4 = new Node(4);

    node1->neighbors = {node2, node4};
    node2->neighbors = {node1, node3};
    node3->neighbors = {node2, node4};
    node4->neighbors = {node1, node3};

    Node* cloned = cloneGraph(node1);
    cout << cloned->val << endl;
}`,
      csharp: `using System;
using System.Collections.Generic;

public class Node {
    public int val;
    public IList<Node> neighbors;
    public Node() {
        val = 0;
        neighbors = new List<Node>();
    }
    public Node(int _val) {
        val = _val;
        neighbors = new List<Node>();
    }
}

class Solution {
    public static Node CloneGraph(Node node) {
        // Write your solution here
        return null;
    }

    static void Main() {
        Node node1 = new Node(1);
        Node node2 = new Node(2);
        Node node3 = new Node(3);
        Node node4 = new Node(4);

        node1.neighbors = new List<Node>{node2, node4};
        node2.neighbors = new List<Node>{node1, node3};
        node3.neighbors = new List<Node>{node2, node4};
        node4.neighbors = new List<Node>{node1, node3};

        Node cloned = CloneGraph(node1);
        Console.WriteLine(cloned.val);
    }
}`,
      c: `#include <stdio.h>

// Placeholder for clone graph

int main() {
    printf("Clone Graph execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "1",
      python: "1",
      java: "1",
      cpp: "1",
      csharp: "1",
      c: "Clone Graph execution",
    },
  },
  "walls-and-gates": {
    id: "walls-and-gates",
    title: "Walls and Gates",
    difficulty: "Medium",
    category: "Graph • BFS • Matrix",
    description: {
      text: "You are given an m x n grid rooms initialized with these three possible values.",
      notes: [
        "-1 represents a wall or an obstacle.",
        "0 represents a gate.",
        "INF represents an empty room.",
        "Fill each empty room with the distance to its nearest gate.",
        "If it is impossible to reach a gate, it should be filled with INF.",
      ],
    },
    examples: [
      {
        input:
          "rooms = [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]",
        output: "[[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]",
      },
    ],
    constraints: [
      "m == rooms.length",
      "n == rooms[i].length",
      "1 ≤ m, n ≤ 250",
      "rooms[i][j] is -1, 0, or 2³¹ - 1",
    ],
    starterCode: {
      javascript: `function wallsAndGates(rooms) {
  // Write your solution here

}

// Test cases
let rooms = [
  [2147483647,-1,0,2147483647],
  [2147483647,2147483647,2147483647,-1],
  [2147483647,-1,2147483647,-1],
  [0,-1,2147483647,2147483647]
];

wallsAndGates(rooms);
console.log(rooms);`,
      python: `def wallsAndGates(rooms):
    # Write your solution here
    pass

# Test cases
rooms = [
  [2147483647,-1,0,2147483647],
  [2147483647,2147483647,2147483647,-1],
  [2147483647,-1,2147483647,-1],
  [0,-1,2147483647,2147483647]
]

wallsAndGates(rooms)
print(rooms)`,
      java: `class Solution {
    public static void wallsAndGates(int[][] rooms) {
        // Write your solution here
    }

    public static void main(String[] args) {
        int[][] rooms = {
            {2147483647,-1,0,2147483647},
            {2147483647,2147483647,2147483647,-1},
            {2147483647,-1,2147483647,-1},
            {0,-1,2147483647,2147483647}
        };

        wallsAndGates(rooms);

        for (int[] row : rooms) {
            for (int x : row) System.out.print(x + " ");
            System.out.println();
        }
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void wallsAndGates(vector<vector<int>>& rooms) {
    // Write your solution here
}

int main() {
    vector<vector<int>> rooms = {
        {2147483647,-1,0,2147483647},
        {2147483647,2147483647,2147483647,-1},
        {2147483647,-1,2147483647,-1},
        {0,-1,2147483647,2147483647}
    };

    wallsAndGates(rooms);

    for (auto& row : rooms) {
        for (int x : row) cout << x << " ";
        cout << endl;
    }
}`,
      csharp: `using System;

class Solution {
    public static void WallsAndGates(int[][] rooms) {
        // Write your solution here
    }

    static void Main() {
        int[][] rooms = new int[][] {
            new int[]{2147483647,-1,0,2147483647},
            new int[]{2147483647,2147483647,2147483647,-1},
            new int[]{2147483647,-1,2147483647,-1},
            new int[]{0,-1,2147483647,2147483647}
        };

        WallsAndGates(rooms);

        foreach (var row in rooms) {
            Console.WriteLine(string.Join(" ", row));
        }
    }
}`,
      c: `#include <stdio.h>

// Placeholder for walls and gates

void wallsAndGates(int rooms[][4], int m, int n) {
    // Write your solution here
}

int main() {
    int rooms[4][4] = {
        {2147483647,-1,0,2147483647},
        {2147483647,2147483647,2147483647,-1},
        {2147483647,-1,2147483647,-1},
        {0,-1,2147483647,2147483647}
    };

    wallsAndGates(rooms, 4, 4);

    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 4; j++) {
            printf("%d ", rooms[i][j]);
        }
        printf("\n");
    }

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]",
      python: "[[3, -1, 0, 1], [2, 2, 1, -1], [1, -1, 2, -1], [0, -1, 3, 4]]",
      java: "3 -1 0 1\n2 2 1 -1\n1 -1 2 -1\n0 -1 3 4",
      cpp: "3 -1 0 1\n2 2 1 -1\n1 -1 2 -1\n0 -1 3 4",
      csharp: "3 -1 0 1\n2 2 1 -1\n1 -1 2 -1\n0 -1 3 4",
      c: "3 -1 0 1\n2 2 1 -1\n1 -1 2 -1\n0 -1 3 4",
    },
  },
  "rotting-oranges": {
    id: "rotting-oranges",
    title: "Rotting Oranges",
    difficulty: "Medium",
    category: "Graph • BFS • Matrix",
    description: {
      text: "You are given an m x n grid where each cell can have one of three values: 0 (empty), 1 (fresh orange), or 2 (rotten orange).",
      notes: [
        "Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.",
        "Return the minimum number of minutes that must elapse until no cell has a fresh orange.",
        "If this is impossible, return -1.",
      ],
    },
    examples: [
      {
        input: "grid = [[2,1,1],[1,1,0],[0,1,1]]",
        output: "4",
      },
      {
        input: "grid = [[2,1,1],[0,1,1],[1,0,1]]",
        output: "-1",
      },
      {
        input: "grid = [[0,2]]",
        output: "0",
      },
    ],
    constraints: [
      "m == grid.length",
      "n == grid[i].length",
      "1 ≤ m, n ≤ 10",
      "grid[i][j] is 0, 1, or 2",
    ],
    starterCode: {
      javascript: `function orangesRotting(grid) {
  // Write your solution here

}

// Test cases
console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]])); // Expected: 4
console.log(orangesRotting([[2,1,1],[0,1,1],[1,0,1]])); // Expected: -1
console.log(orangesRotting([[0,2]])); // Expected: 0`,
      python: `def orangesRotting(grid):
    # Write your solution here
    pass

# Test cases
print(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]))
print(orangesRotting([[2,1,1],[0,1,1],[1,0,1]]))
print(orangesRotting([[0,2]]))`,
      java: `class Solution {
    public static int orangesRotting(int[][] grid) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(orangesRotting(new int[][]{{2,1,1},{1,1,0},{0,1,1}}));
        System.out.println(orangesRotting(new int[][]{{2,1,1},{0,1,1},{1,0,1}}));
        System.out.println(orangesRotting(new int[][]{{0,2}}));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int orangesRotting(vector<vector<int>>& grid) {
    // Write your solution here
    return 0;
}

int main() {
    vector<vector<int>> g1 = {{2,1,1},{1,1,0},{0,1,1}};
    vector<vector<int>> g2 = {{2,1,1},{0,1,1},{1,0,1}};
    vector<vector<int>> g3 = {{0,2}};

    cout << orangesRotting(g1) << endl;
    cout << orangesRotting(g2) << endl;
    cout << orangesRotting(g3) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int OrangesRotting(int[][] grid) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(OrangesRotting(new int[][]{{2,1,1},{1,1,0},{0,1,1}}));
        Console.WriteLine(OrangesRotting(new int[][]{{2,1,1},{0,1,1},{1,0,1}}));
        Console.WriteLine(OrangesRotting(new int[][]{{0,2}}));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for rotting oranges

int orangesRotting(int grid[][3], int m, int n) {
    // Write your solution here
    return 0;
}

int main() {
    int g1[3][3] = {{2,1,1},{1,1,0},{0,1,1}};
    int g2[3][3] = {{2,1,1},{0,1,1},{1,0,1}};
    int g3[1][2] = {{0,2}};

    printf("%d\n", orangesRotting(g1, 3, 3));
    printf("%d\n", orangesRotting(g2, 3, 3));
    printf("%d\n", orangesRotting(g3, 1, 2));

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "4\n-1\n0",
      python: "4\n-1\n0",
      java: "4\n-1\n0",
      cpp: "4\n-1\n0",
      csharp: "4\n-1\n0",
      c: "4\n-1\n0",
    },
  },
  "pacific-atlantic-water-flow": {
    id: "pacific-atlantic-water-flow",
    title: "Pacific Atlantic Water Flow",
    difficulty: "Medium",
    category: "Graph • DFS • BFS • Matrix",
    description: {
      text: "There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean.",
      notes: [
        "The Pacific Ocean touches the island's left and top edges.",
        "The Atlantic Ocean touches the island's right and bottom edges.",
        "Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower.",
        "Return a list of grid coordinates where water can flow to both the Pacific and Atlantic oceans.",
      ],
    },
    examples: [
      {
        input:
          "heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]",
        output: "[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]",
      },
    ],
    constraints: [
      "m == heights.length",
      "n == heights[r].length",
      "1 ≤ m, n ≤ 200",
      "0 ≤ heights[r][c] ≤ 10⁵",
    ],
    starterCode: {
      javascript: `function pacificAtlantic(heights) {
  // Write your solution here

}

// Test cases
console.log(pacificAtlantic([
  [1,2,2,3,5],
  [3,2,3,4,4],
  [2,4,5,3,1],
  [6,7,1,4,5],
  [5,1,1,2,4]
]));`,
      python: `def pacificAtlantic(heights):
    # Write your solution here
    pass

# Test cases
print(pacificAtlantic([
  [1,2,2,3,5],
  [3,2,3,4,4],
  [2,4,5,3,1],
  [6,7,1,4,5],
  [5,1,1,2,4]
]))`,
      java: `import java.util.*;

class Solution {
    public static List<List<Integer>> pacificAtlantic(int[][] heights) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        int[][] heights = {
            {1,2,2,3,5},
            {3,2,3,4,4},
            {2,4,5,3,1},
            {6,7,1,4,5},
            {5,1,1,2,4}
        };

        System.out.println(pacificAtlantic(heights));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> pacificAtlantic(vector<vector<int>>& heights) {
    // Write your solution here
    return {};
}

int main() {
    vector<vector<int>> heights = {
        {1,2,2,3,5},
        {3,2,3,4,4},
        {2,4,5,3,1},
        {6,7,1,4,5},
        {5,1,1,2,4}
    };

    auto res = pacificAtlantic(heights);
    cout << res.size() << endl;
}`,
      csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static IList<IList<int>> PacificAtlantic(int[][] heights) {
        // Write your solution here
        return new List<IList<int>>();
    }

    static void Main() {
        int[][] heights = new int[][] {
            new int[]{1,2,2,3,5},
            new int[]{3,2,3,4,4},
            new int[]{2,4,5,3,1},
            new int[]{6,7,1,4,5},
            new int[]{5,1,1,2,4}
        };

        var res = PacificAtlantic(heights);
        Console.WriteLine(res.Count);
    }
}`,
      c: `#include <stdio.h>

// Placeholder for Pacific Atlantic Water Flow

void pacificAtlantic() {
    // Write your solution here
}

int main() {
    printf("Pacific Atlantic execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]",
      python: "[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]]",
      java: "[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]]",
      cpp: "7",
      csharp: "7",
      c: "Pacific Atlantic execution",
    },
  },
  "surrounded-regions": {
    id: "surrounded-regions",
    title: "Surrounded Regions",
    difficulty: "Medium",
    category: "Graph • DFS • BFS • Matrix",
    description: {
      text: "Given an m x n matrix board containing 'X' and 'O', capture all regions that are surrounded by 'X'.",
      notes: [
        "A region is captured by flipping all 'O's into 'X's in that surrounded region.",
        "A region is surrounded if it is completely surrounded by 'X' on all sides.",
        "Any 'O' on the border or connected to a border 'O' should not be flipped.",
      ],
    },
    examples: [
      {
        input:
          'board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]',
        output:
          '[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]',
      },
      {
        input: 'board = [["X"]]',
        output: '[["X"]]',
      },
    ],
    constraints: [
      "m == board.length",
      "n == board[i].length",
      "1 ≤ m, n ≤ 200",
      "board[i][j] is 'X' or 'O'",
    ],
    starterCode: {
      javascript: `function solve(board) {
  // Write your solution here

}

// Test cases
let board = [
  ["X","X","X","X"],
  ["X","O","O","X"],
  ["X","X","O","X"],
  ["X","O","X","X"]
];

solve(board);
console.log(board);`,
      python: `def solve(board):
    # Write your solution here
    pass

# Test cases
board = [
  ["X","X","X","X"],
  ["X","O","O","X"],
  ["X","X","O","X"],
  ["X","O","X","X"]
]

solve(board)
print(board)`,
      java: `class Solution {
    public static void solve(char[][] board) {
        // Write your solution here
    }

    public static void main(String[] args) {
        char[][] board = {
            {'X','X','X','X'},
            {'X','O','O','X'},
            {'X','X','O','X'},
            {'X','O','X','X'}
        };

        solve(board);

        for (char[] row : board) {
            for (char c : row) System.out.print(c + " ");
            System.out.println();
        }
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void solve(vector<vector<char>>& board) {
    // Write your solution here
}

int main() {
    vector<vector<char>> board = {
        {'X','X','X','X'},
        {'X','O','O','X'},
        {'X','X','O','X'},
        {'X','O','X','X'}
    };

    solve(board);

    for (auto& row : board) {
        for (char c : row) cout << c << " ";
        cout << endl;
    }
}`,
      csharp: `using System;

class Solution {
    public static void Solve(char[][] board) {
        // Write your solution here
    }

    static void Main() {
        char[][] board = new char[][] {
            new char[]{'X','X','X','X'},
            new char[]{'X','O','O','X'},
            new char[]{'X','X','O','X'},
            new char[]{'X','O','X','X'}
        };

        Solve(board);

        foreach (var row in board) {
            Console.WriteLine(string.Join(" ", row));
        }
    }
}`,
      c: `#include <stdio.h>

// Placeholder for surrounded regions

void solve(char board[][4], int m, int n) {
    // Write your solution here
}

int main() {
    char board[4][4] = {
        {'X','X','X','X'},
        {'X','O','O','X'},
        {'X','X','O','X'},
        {'X','O','X','X'}
    };

    solve(board, 4, 4);

    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 4; j++) {
            printf("%c ", board[i][j]);
        }
        printf("\n");
    }

    return 0;
}`,
    },
    expectedOutput: {
      javascript:
        '[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]',
      python:
        "[['X', 'X', 'X', 'X'], ['X', 'X', 'X', 'X'], ['X', 'X', 'X', 'X'], ['X', 'O', 'X', 'X']]",
      java: "X X X X\nX X X X\nX X X X\nX O X X",
      cpp: "X X X X\nX X X X\nX X X X\nX O X X",
      csharp: "X X X X\nX X X X\nX X X X\nX O X X",
      c: "X X X X\nX X X X\nX X X X\nX O X X",
    },
  },
  "course-schedule": {
    id: "course-schedule",
    title: "Course Schedule",
    difficulty: "Medium",
    category: "Graph • DFS • BFS • Topological Sort",
    description: {
      text: "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.",
      notes: [
        "You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.",
        "Return true if you can finish all courses. Otherwise, return false.",
      ],
    },
    examples: [
      {
        input: "numCourses = 2, prerequisites = [[1,0]]",
        output: "true",
      },
      {
        input: "numCourses = 2, prerequisites = [[1,0],[0,1]]",
        output: "false",
      },
    ],
    constraints: [
      "1 ≤ numCourses ≤ 2000",
      "0 ≤ prerequisites.length ≤ 5000",
      "prerequisites[i].length == 2",
      "0 ≤ ai, bi < numCourses",
      "All the pairs prerequisites[i] are unique",
    ],
    starterCode: {
      javascript: `function canFinish(numCourses, prerequisites) {
  // Write your solution here

}

// Test cases
console.log(canFinish(2, [[1,0]])); // Expected: true
console.log(canFinish(2, [[1,0],[0,1]])); // Expected: false`,
      python: `def canFinish(numCourses, prerequisites):
    # Write your solution here
    pass

# Test cases
print(canFinish(2, [[1,0]]))  # Expected: True
print(canFinish(2, [[1,0],[0,1]]))  # Expected: False`,
      java: `import java.util.*;

class Solution {
    public static boolean canFinish(int numCourses, int[][] prerequisites) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(canFinish(2, new int[][]{{1,0}}));
        System.out.println(canFinish(2, new int[][]{{1,0},{0,1}}));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
    // Write your solution here
    return false;
}

int main() {
    vector<vector<int>> p1 = {{1,0}};
    vector<vector<int>> p2 = {{1,0},{0,1}};

    cout << canFinish(2, p1) << endl;
    cout << canFinish(2, p2) << endl;
}`,
      csharp: `using System;

class Solution {
    public static bool CanFinish(int numCourses, int[][] prerequisites) {
        // Write your solution here
        return false;
    }

    static void Main() {
        Console.WriteLine(CanFinish(2, new int[][] { new int[]{1,0} }));
        Console.WriteLine(CanFinish(2, new int[][] { new int[]{1,0}, new int[]{0,1} }));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for course schedule

int canFinish(int numCourses, int prerequisites[][2], int size) {
    // Write your solution here
    return 0;
}

int main() {
    int p1[][2] = {{1,0}};
    int p2[][2] = {{1,0},{0,1}};

    printf("%d\n", canFinish(2, p1, 1));
    printf("%d\n", canFinish(2, p2, 2));

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
      cpp: "1\n0",
      csharp: "True\nFalse",
      c: "1\n0",
    },
  },
  "course-schedule-ii": {
    id: "course-schedule-ii",
    title: "Course Schedule II",
    difficulty: "Medium",
    category: "Graph • BFS • Topological Sort",
    description: {
      text: "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.",
      notes: [
        "You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi before course ai.",
        "Return the ordering of courses you should take to finish all courses.",
        "If there are many valid answers, return any of them.",
        "If it is impossible to finish all courses, return an empty array.",
      ],
    },
    examples: [
      {
        input: "numCourses = 2, prerequisites = [[1,0]]",
        output: "[0,1]",
      },
      {
        input: "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
        output: "[0,1,2,3]",
      },
      {
        input: "numCourses = 1, prerequisites = []",
        output: "[0]",
      },
    ],
    constraints: [
      "1 ≤ numCourses ≤ 2000",
      "0 ≤ prerequisites.length ≤ 5000",
      "prerequisites[i].length == 2",
      "0 ≤ ai, bi < numCourses",
      "All the pairs prerequisites[i] are distinct",
    ],
    starterCode: {
      javascript: `function findOrder(numCourses, prerequisites) {
  // Write your solution here

}

// Test cases
console.log(findOrder(2, [[1,0]])); // Expected: [0,1]
console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]])); // Expected: valid order
console.log(findOrder(1, [])); // Expected: [0]`,
      python: `def findOrder(numCourses, prerequisites):
    # Write your solution here
    pass

# Test cases
print(findOrder(2, [[1,0]]))
print(findOrder(4, [[1,0],[2,0],[3,1],[3,2]]))
print(findOrder(1, []))`,
      java: `import java.util.*;

class Solution {
    public static int[] findOrder(int numCourses, int[][] prerequisites) {
        // Write your solution here
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(findOrder(2, new int[][]{{1,0}})));
        System.out.println(Arrays.toString(findOrder(4, new int[][]{{1,0},{2,0},{3,1},{3,2}})));
        System.out.println(Arrays.toString(findOrder(1, new int[][]{})));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites) {
    // Write your solution here
    return {};
}

int main() {
    vector<vector<int>> p1 = {{1,0}};
    vector<vector<int>> p2 = {{1,0},{2,0},{3,1},{3,2}};

    auto r1 = findOrder(2, p1);
    auto r2 = findOrder(4, p2);

    cout << r1.size() << endl;
    cout << r2.size() << endl;
}`,
      csharp: `using System;

class Solution {
    public static int[] FindOrder(int numCourses, int[][] prerequisites) {
        // Write your solution here
        return new int[0];
    }

    static void Main() {
        Console.WriteLine(string.Join(",", FindOrder(2, new int[][] { new int[]{1,0} })));
        Console.WriteLine(string.Join(",", FindOrder(4, new int[][] {
            new int[]{1,0}, new int[]{2,0}, new int[]{3,1}, new int[]{3,2}
        })));
        Console.WriteLine(string.Join(",", FindOrder(1, new int[][] { })));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for course schedule II

void findOrder() {
    // Write your solution here
}

int main() {
    printf("Course Schedule II execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\nvalid order\n[0]",
      python: "[0, 1]\nvalid order\n[0]",
      java: "[0, 1]\nvalid order\n[0]",
      cpp: "2\n4",
      csharp: "0,1\nvalid order\n0",
      c: "Course Schedule II execution",
    },
  },
  "graph-valid-tree": {
    id: "graph-valid-tree",
    title: "Graph Valid Tree",
    difficulty: "Medium",
    category: "Graph • DFS • Union Find",
    description: {
      text: "Given n nodes labeled from 0 to n - 1 and a list of undirected edges, write a function to check whether these edges make up a valid tree.",
      notes: ["A valid tree must be connected and have no cycles."],
    },
    examples: [
      {
        input: "n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]",
        output: "true",
      },
      {
        input: "n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]",
        output: "false",
      },
    ],
    constraints: [
      "1 ≤ n ≤ 2000",
      "0 ≤ edges.length ≤ 5000",
      "edges[i].length == 2",
      "0 ≤ ai, bi < n",
      "ai != bi",
      "There are no duplicate edges",
    ],
    starterCode: {
      javascript: `function validTree(n, edges) {
  // Write your solution here

}

// Test cases
console.log(validTree(5, [[0,1],[0,2],[0,3],[1,4]])); // Expected: true
console.log(validTree(5, [[0,1],[1,2],[2,3],[1,3],[1,4]])); // Expected: false`,
      python: `def validTree(n, edges):
    # Write your solution here
    pass

# Test cases
print(validTree(5, [[0,1],[0,2],[0,3],[1,4]]))  # Expected: True
print(validTree(5, [[0,1],[1,2],[2,3],[1,3],[1,4]]))  # Expected: False`,
      java: `import java.util.*;

class Solution {
    public static boolean validTree(int n, int[][] edges) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(validTree(5, new int[][]{{0,1},{0,2},{0,3},{1,4}}));
        System.out.println(validTree(5, new int[][]{{0,1},{1,2},{2,3},{1,3},{1,4}}));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

bool validTree(int n, vector<vector<int>>& edges) {
    // Write your solution here
    return false;
}

int main() {
    vector<vector<int>> e1 = {{0,1},{0,2},{0,3},{1,4}};
    vector<vector<int>> e2 = {{0,1},{1,2},{2,3},{1,3},{1,4}};

    cout << validTree(5, e1) << endl;
    cout << validTree(5, e2) << endl;
}`,
      csharp: `using System;

class Solution {
    public static bool ValidTree(int n, int[][] edges) {
        // Write your solution here
        return false;
    }

    static void Main() {
        Console.WriteLine(ValidTree(5, new int[][] {
            new int[]{0,1}, new int[]{0,2}, new int[]{0,3}, new int[]{1,4}
        }));
        Console.WriteLine(ValidTree(5, new int[][] {
            new int[]{0,1}, new int[]{1,2}, new int[]{2,3}, new int[]{1,3}, new int[]{1,4}
        }));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for graph valid tree

int validTree(int n, int edges[][2], int size) {
    // Write your solution here
    return 0;
}

int main() {
    int e1[][2] = {{0,1},{0,2},{0,3},{1,4}};
    int e2[][2] = {{0,1},{1,2},{2,3},{1,3},{1,4}};

    printf("%d\n", validTree(5, e1, 4));
    printf("%d\n", validTree(5, e2, 5));

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
      cpp: "1\n0",
      csharp: "True\nFalse",
      c: "1\n0",
    },
  },
  "number-of-connected-components-in-an-undirected-graph": {
    id: "number-of-connected-components-in-an-undirected-graph",
    title: "Number of Connected Components in an Undirected Graph",
    difficulty: "Medium",
    category: "Graph • DFS • Union Find",
    description: {
      text: "You have a graph of n nodes labeled from 0 to n - 1 and a list of undirected edges.",
      notes: ["Return the number of connected components in the graph."],
    },
    examples: [
      {
        input: "n = 5, edges = [[0,1],[1,2],[3,4]]",
        output: "2",
      },
      {
        input: "n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]",
        output: "1",
      },
    ],
    constraints: [
      "1 ≤ n ≤ 2000",
      "0 ≤ edges.length ≤ 5000",
      "edges[i].length == 2",
      "0 ≤ ai, bi < n",
      "ai != bi",
      "There are no duplicate edges",
    ],
    starterCode: {
      javascript: `function countComponents(n, edges) {
  // Write your solution here

}

// Test cases
console.log(countComponents(5, [[0,1],[1,2],[3,4]])); // Expected: 2
console.log(countComponents(5, [[0,1],[1,2],[2,3],[3,4]])); // Expected: 1`,
      python: `def countComponents(n, edges):
    # Write your solution here
    pass

# Test cases
print(countComponents(5, [[0,1],[1,2],[3,4]]))  # Expected: 2
print(countComponents(5, [[0,1],[1,2],[2,3],[3,4]]))  # Expected: 1`,
      java: `import java.util.*;

class Solution {
    public static int countComponents(int n, int[][] edges) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(countComponents(5, new int[][]{{0,1},{1,2},{3,4}}));
        System.out.println(countComponents(5, new int[][]{{0,1},{1,2},{2,3},{3,4}}));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int countComponents(int n, vector<vector<int>>& edges) {
    // Write your solution here
    return 0;
}

int main() {
    vector<vector<int>> e1 = {{0,1},{1,2},{3,4}};
    vector<vector<int>> e2 = {{0,1},{1,2},{2,3},{3,4}};

    cout << countComponents(5, e1) << endl;
    cout << countComponents(5, e2) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int CountComponents(int n, int[][] edges) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(CountComponents(5, new int[][] {
            new int[]{0,1}, new int[]{1,2}, new int[]{3,4}
        }));
        Console.WriteLine(CountComponents(5, new int[][] {
            new int[]{0,1}, new int[]{1,2}, new int[]{2,3}, new int[]{3,4}
        }));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for connected components

int countComponents(int n, int edges[][2], int size) {
    // Write your solution here
    return 0;
}

int main() {
    int e1[][2] = {{0,1},{1,2},{3,4}};
    int e2[][2] = {{0,1},{1,2},{2,3},{3,4}};

    printf("%d\n", countComponents(5, e1, 3));
    printf("%d\n", countComponents(5, e2, 4));

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "2\n1",
      python: "2\n1",
      java: "2\n1",
      cpp: "2\n1",
      csharp: "2\n1",
      c: "2\n1",
    },
  },
  "redundant-connection": {
    id: "redundant-connection",
    title: "Redundant Connection",
    difficulty: "Medium",
    category: "Graph • Union Find",
    description: {
      text: "In this problem, a tree is an undirected graph that is connected and has no cycles.",
      notes: [
        "You are given a graph that started as a tree with n nodes labeled from 1 to n.",
        "One additional edge is added, creating a cycle.",
        "Return the edge that can be removed so that the resulting graph is a tree.",
        "If there are multiple answers, return the answer that occurs last in the input.",
      ],
    },
    examples: [
      {
        input: "edges = [[1,2],[1,3],[2,3]]",
        output: "[2,3]",
      },
      {
        input: "edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]",
        output: "[1,4]",
      },
    ],
    constraints: [
      "n == edges.length",
      "3 ≤ n ≤ 1000",
      "edges[i].length == 2",
      "1 ≤ ai < bi ≤ edges.length",
      "ai != bi",
      "There are no repeated edges",
      "The given graph is connected",
    ],
    starterCode: {
      javascript: `function findRedundantConnection(edges) {
  // Write your solution here

}

// Test cases
console.log(findRedundantConnection([[1,2],[1,3],[2,3]])); // Expected: [2,3]
console.log(findRedundantConnection([[1,2],[2,3],[3,4],[1,4],[1,5]])); // Expected: [1,4]`,
      python: `def findRedundantConnection(edges):
    # Write your solution here
    pass

# Test cases
print(findRedundantConnection([[1,2],[1,3],[2,3]]))
print(findRedundantConnection([[1,2],[2,3],[3,4],[1,4],[1,5]]))`,
      java: `import java.util.*;

class Solution {
    public static int[] findRedundantConnection(int[][] edges) {
        // Write your solution here
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(findRedundantConnection(new int[][]{{1,2},{1,3},{2,3}})));
        System.out.println(Arrays.toString(findRedundantConnection(new int[][]{{1,2},{2,3},{3,4},{1,4},{1,5}})));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> findRedundantConnection(vector<vector<int>>& edges) {
    // Write your solution here
    return {};
}

int main() {
    vector<vector<int>> e1 = {{1,2},{1,3},{2,3}};
    vector<vector<int>> e2 = {{1,2},{2,3},{3,4},{1,4},{1,5}};

    auto r1 = findRedundantConnection(e1);
    auto r2 = findRedundantConnection(e2);

    cout << r1[0] << "," << r1[1] << endl;
    cout << r2[0] << "," << r2[1] << endl;
}`,
      csharp: `using System;

class Solution {
    public static int[] FindRedundantConnection(int[][] edges) {
        // Write your solution here
        return new int[0];
    }

    static void Main() {
        var r1 = FindRedundantConnection(new int[][] {
            new int[]{1,2}, new int[]{1,3}, new int[]{2,3}
        });
        var r2 = FindRedundantConnection(new int[][] {
            new int[]{1,2}, new int[]{2,3}, new int[]{3,4}, new int[]{1,4}, new int[]{1,5}
        });

        Console.WriteLine($"{r1[0]},{r1[1]}");
        Console.WriteLine($"{r2[0]},{r2[1]}");
    }
}`,
      c: `#include <stdio.h>

// Placeholder for redundant connection

void findRedundantConnection() {
    // Write your solution here
}

int main() {
    printf("Redundant Connection execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[2,3]\n[1,4]",
      python: "[2, 3]\n[1, 4]",
      java: "[2, 3]\n[1, 4]",
      cpp: "2,3\n1,4",
      csharp: "2,3\n1,4",
      c: "Redundant Connection execution",
    },
  },
  "word-ladder": {
    id: "word-ladder",
    title: "Word Ladder",
    difficulty: "Hard",
    category: "Graph • BFS • String",
    description: {
      text: "A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words such that:",
      notes: [
        "Only one letter can be changed at a time.",
        "Each transformed word must exist in the word list.",
        "Return the length of the shortest transformation sequence from beginWord to endWord.",
        "If no such sequence exists, return 0.",
      ],
    },
    examples: [
      {
        input:
          'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]',
        output: "5",
      },
      {
        input:
          'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]',
        output: "0",
      },
    ],
    constraints: [
      "1 ≤ beginWord.length ≤ 10",
      "endWord.length == beginWord.length",
      "1 ≤ wordList.length ≤ 5000",
      "wordList[i].length == beginWord.length",
      "beginWord, endWord, and wordList[i] consist of lowercase English letters",
      "beginWord != endWord",
      "All the words in wordList are unique",
    ],
    starterCode: {
      javascript: `function ladderLength(beginWord, endWord, wordList) {
  // Write your solution here

}

// Test cases
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"])); // Expected: 5
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log"])); // Expected: 0`,
      python: `def ladderLength(beginWord, endWord, wordList):
    # Write your solution here
    pass

# Test cases
print(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]))
print(ladderLength("hit", "cog", ["hot","dot","dog","lot","log"]))`,
      java: `import java.util.*;

class Solution {
    public static int ladderLength(String beginWord, String endWord, List<String> wordList) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(ladderLength("hit", "cog", Arrays.asList("hot","dot","dog","lot","log","cog")));
        System.out.println(ladderLength("hit", "cog", Arrays.asList("hot","dot","dog","lot","log")));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

int ladderLength(string beginWord, string endWord, vector<string>& wordList) {
    // Write your solution here
    return 0;
}

int main() {
    vector<string> w1 = {"hot","dot","dog","lot","log","cog"};
    vector<string> w2 = {"hot","dot","dog","lot","log"};

    cout << ladderLength("hit", "cog", w1) << endl;
    cout << ladderLength("hit", "cog", w2) << endl;
}`,
      csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static int LadderLength(string beginWord, string endWord, IList<string> wordList) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(LadderLength("hit", "cog", new List<string>{"hot","dot","dog","lot","log","cog"}));
        Console.WriteLine(LadderLength("hit", "cog", new List<string>{"hot","dot","dog","lot","log"}));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for word ladder

int main() {
    printf("Word Ladder execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "5\n0",
      python: "5\n0",
      java: "5\n0",
      cpp: "5\n0",
      csharp: "5\n0",
      c: "Word Ladder execution",
    },
  },

  //Advanced Graphs
  "network-delay-time": {
    id: "network-delay-time",
    title: "Network Delay Time",
    difficulty: "Medium",
    category: "Graph • Dijkstra • Shortest Path",
    description: {
      text: "You are given a network of n nodes, labeled from 1 to n.",
      notes: [
        "You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi).",
        "wi is the time it takes for a signal to travel from ui to vi.",
        "We will send a signal from a given node k.",
        "Return the minimum time it takes for all the n nodes to receive the signal.",
        "If it is impossible for all nodes to receive the signal, return -1.",
      ],
    },
    examples: [
      {
        input: "times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2",
        output: "2",
      },
      {
        input: "times = [[1,2,1]], n = 2, k = 1",
        output: "1",
      },
      {
        input: "times = [[1,2,1]], n = 2, k = 2",
        output: "-1",
      },
    ],
    constraints: [
      "1 ≤ k ≤ n ≤ 100",
      "1 ≤ times.length ≤ 6000",
      "times[i].length == 3",
      "1 ≤ ui, vi ≤ n",
      "ui != vi",
      "0 ≤ wi ≤ 100",
      "All the pairs (ui, vi) are unique",
    ],
    starterCode: {
      javascript: `function networkDelayTime(times, n, k) {
  // Write your solution here

}

// Test cases
console.log(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]], 4, 2)); // Expected: 2
console.log(networkDelayTime([[1,2,1]], 2, 1)); // Expected: 1
console.log(networkDelayTime([[1,2,1]], 2, 2)); // Expected: -1`,
      python: `def networkDelayTime(times, n, k):
    # Write your solution here
    pass

# Test cases
print(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]], 4, 2))
print(networkDelayTime([[1,2,1]], 2, 1))
print(networkDelayTime([[1,2,1]], 2, 2))`,
      java: `import java.util.*;

class Solution {
    public static int networkDelayTime(int[][] times, int n, int k) {
        // Write your solution here
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(networkDelayTime(new int[][]{{2,1,1},{2,3,1},{3,4,1}}, 4, 2));
        System.out.println(networkDelayTime(new int[][]{{1,2,1}}, 2, 1));
        System.out.println(networkDelayTime(new int[][]{{1,2,1}}, 2, 2));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int networkDelayTime(vector<vector<int>>& times, int n, int k) {
    // Write your solution here
    return -1;
}

int main() {
    vector<vector<int>> t1 = {{2,1,1},{2,3,1},{3,4,1}};
    vector<vector<int>> t2 = {{1,2,1}};

    cout << networkDelayTime(t1, 4, 2) << endl;
    cout << networkDelayTime(t2, 2, 1) << endl;
    cout << networkDelayTime(t2, 2, 2) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int NetworkDelayTime(int[][] times, int n, int k) {
        // Write your solution here
        return -1;
    }

    static void Main() {
        Console.WriteLine(NetworkDelayTime(new int[][] {
            new int[]{2,1,1}, new int[]{2,3,1}, new int[]{3,4,1}
        }, 4, 2));
        Console.WriteLine(NetworkDelayTime(new int[][] {
            new int[]{1,2,1}
        }, 2, 1));
        Console.WriteLine(NetworkDelayTime(new int[][] {
            new int[]{1,2,1}
        }, 2, 2));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for network delay time

int main() {
    printf("Network Delay Time execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "2\n1\n-1",
      python: "2\n1\n-1",
      java: "2\n1\n-1",
      cpp: "2\n1\n-1",
      csharp: "2\n1\n-1",
      c: "Network Delay Time execution",
    },
  },
  "reconstruct-itinerary": {
    id: "reconstruct-itinerary",
    title: "Reconstruct Itinerary",
    difficulty: "Hard",
    category: "Graph • DFS • Backtracking • Eulerian Path",
    description: {
      text: "You are given a list of airline tickets where tickets[i] = [fromi, toi] represent the departure and the arrival airports.",
      notes: [
        "Reconstruct the itinerary in order and return it.",
        "All of the tickets belong to a man who departs from 'JFK'.",
        "If there are multiple valid itineraries, return the itinerary that has the smallest lexical order.",
        "You must use all the tickets once and only once.",
      ],
    },
    examples: [
      {
        input:
          'tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]',
        output: '["JFK","MUC","LHR","SFO","SJC"]',
      },
      {
        input:
          'tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]',
        output: '["JFK","ATL","JFK","SFO","ATL","SFO"]',
      },
    ],
    constraints: [
      "1 ≤ tickets.length ≤ 300",
      "tickets[i].length == 2",
      "fromi.length == 3",
      "toi.length == 3",
      "fromi and toi consist of uppercase English letters",
      "fromi != toi",
    ],
    starterCode: {
      javascript: `function findItinerary(tickets) {
  // Write your solution here

}

// Test cases
console.log(findItinerary([
  ["MUC","LHR"],
  ["JFK","MUC"],
  ["SFO","SJC"],
  ["LHR","SFO"]
])); // Expected: ["JFK","MUC","LHR","SFO","SJC"]

console.log(findItinerary([
  ["JFK","SFO"],
  ["JFK","ATL"],
  ["SFO","ATL"],
  ["ATL","JFK"],
  ["ATL","SFO"]
]));`,
      python: `def findItinerary(tickets):
    # Write your solution here
    pass

# Test cases
print(findItinerary([
  ["MUC","LHR"],
  ["JFK","MUC"],
  ["SFO","SJC"],
  ["LHR","SFO"]
]))

print(findItinerary([
  ["JFK","SFO"],
  ["JFK","ATL"],
  ["SFO","ATL"],
  ["ATL","JFK"],
  ["ATL","SFO"]
]))`,
      java: `import java.util.*;

class Solution {
    public static List<String> findItinerary(List<List<String>> tickets) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        List<List<String>> t1 = Arrays.asList(
            Arrays.asList("MUC","LHR"),
            Arrays.asList("JFK","MUC"),
            Arrays.asList("SFO","SJC"),
            Arrays.asList("LHR","SFO")
        );

        System.out.println(findItinerary(t1));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

vector<string> findItinerary(vector<vector<string>>& tickets) {
    // Write your solution here
    return {};
}

int main() {
    vector<vector<string>> t1 = {
        {"MUC","LHR"},
        {"JFK","MUC"},
        {"SFO","SJC"},
        {"LHR","SFO"}
    };

    auto res = findItinerary(t1);
    for (auto& s : res) cout << s << " ";
    cout << endl;
}`,
      csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static IList<string> FindItinerary(IList<IList<string>> tickets) {
        // Write your solution here
        return new List<string>();
    }

    static void Main() {
        var tickets = new List<IList<string>> {
            new List<string>{"MUC","LHR"},
            new List<string>{"JFK","MUC"},
            new List<string>{"SFO","SJC"},
            new List<string>{"LHR","SFO"}
        };

        var res = FindItinerary(tickets);
        Console.WriteLine(string.Join(",", res));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for reconstruct itinerary

int main() {
    printf("Reconstruct Itinerary execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: '["JFK","MUC","LHR","SFO","SJC"]',
      python: "['JFK', 'MUC', 'LHR', 'SFO', 'SJC']",
      java: "[JFK, MUC, LHR, SFO, SJC]",
      cpp: "JFK MUC LHR SFO SJC",
      csharp: "JFK,MUC,LHR,SFO,SJC",
      c: "Reconstruct Itinerary execution",
    },
  },
  "min-cost-to-connect-all-points": {
    id: "min-cost-to-connect-all-points",
    title: "Min Cost to Connect All Points",
    difficulty: "Medium",
    category: "Graph • Minimum Spanning Tree • Prim's Algorithm",
    description: {
      text: "You are given an array points representing integer coordinates of some points on a 2D-plane.",
      notes: [
        "The cost of connecting two points [xi, yi] and [xj, yj] is the Manhattan distance between them.",
        "Return the minimum cost to make all points connected.",
        "All points are connected if there is exactly one simple path between any two points.",
      ],
    },
    examples: [
      {
        input: "points = [[0,0],[2,2],[3,10],[5,2],[7,0]]",
        output: "20",
      },
      {
        input: "points = [[3,12],[-2,5],[-4,1]]",
        output: "18",
      },
    ],
    constraints: [
      "1 ≤ points.length ≤ 1000",
      "-10⁶ ≤ xi, yi ≤ 10⁶",
      "All pairs (xi, yi) are distinct",
    ],
    starterCode: {
      javascript: `function minCostConnectPoints(points) {
  // Write your solution here

}

// Test cases
console.log(minCostConnectPoints([[0,0],[2,2],[3,10],[5,2],[7,0]])); // Expected: 20
console.log(minCostConnectPoints([[3,12],[-2,5],[-4,1]])); // Expected: 18`,
      python: `def minCostConnectPoints(points):
    # Write your solution here
    pass

# Test cases
print(minCostConnectPoints([[0,0],[2,2],[3,10],[5,2],[7,0]]))
print(minCostConnectPoints([[3,12],[-2,5],[-4,1]]))`,
      java: `import java.util.*;

class Solution {
    public static int minCostConnectPoints(int[][] points) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(minCostConnectPoints(new int[][]{{0,0},{2,2},{3,10},{5,2},{7,0}}));
        System.out.println(minCostConnectPoints(new int[][]{{3,12},{-2,5},{-4,1}}));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int minCostConnectPoints(vector<vector<int>>& points) {
    // Write your solution here
    return 0;
}

int main() {
    vector<vector<int>> p1 = {{0,0},{2,2},{3,10},{5,2},{7,0}};
    vector<vector<int>> p2 = {{3,12},{-2,5},{-4,1}};

    cout << minCostConnectPoints(p1) << endl;
    cout << minCostConnectPoints(p2) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int MinCostConnectPoints(int[][] points) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(MinCostConnectPoints(new int[][] {
            new int[]{0,0}, new int[]{2,2}, new int[]{3,10}, new int[]{5,2}, new int[]{7,0}
        }));
        Console.WriteLine(MinCostConnectPoints(new int[][] {
            new int[]{3,12}, new int[]{-2,5}, new int[]{-4,1}
        }));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for min cost to connect points

int main() {
    printf("Min Cost Connect Points execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "20\n18",
      python: "20\n18",
      java: "20\n18",
      cpp: "20\n18",
      csharp: "20\n18",
      c: "Min Cost Connect Points execution",
    },
  },
  "swim-in-rising-water": {
    id: "swim-in-rising-water",
    title: "Swim in Rising Water",
    difficulty: "Hard",
    category: "Graph • Dijkstra • Binary Search",
    description: {
      text: "You are given an n x n integer matrix grid where each value grid[i][j] represents the elevation at that point.",
      notes: [
        "The rain starts to fall, and water level rises over time.",
        "At time t, you can swim in any cell where grid[i][j] ≤ t.",
        "You can swim from one cell to another 4-directionally adjacent cell.",
        "Return the least time until you can reach from top-left (0,0) to bottom-right (n-1,n-1).",
      ],
    },
    examples: [
      {
        input: "grid = [[0,2],[1,3]]",
        output: "3",
      },
      {
        input:
          "grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]",
        output: "16",
      },
    ],
    constraints: [
      "n == grid.length",
      "n == grid[i].length",
      "1 ≤ n ≤ 50",
      "0 ≤ grid[i][j] < n²",
      "Each value grid[i][j] is unique",
    ],
    starterCode: {
      javascript: `function swimInWater(grid) {
  // Write your solution here

}

// Test cases
console.log(swimInWater([[0,2],[1,3]])); // Expected: 3
console.log(swimInWater([
  [0,1,2,3,4],
  [24,23,22,21,5],
  [12,13,14,15,16],
  [11,17,18,19,20],
  [10,9,8,7,6]
])); // Expected: 16`,
      python: `def swimInWater(grid):
    # Write your solution here
    pass

# Test cases
print(swimInWater([[0,2],[1,3]]))
print(swimInWater([
  [0,1,2,3,4],
  [24,23,22,21,5],
  [12,13,14,15,16],
  [11,17,18,19,20],
  [10,9,8,7,6]
]))`,
      java: `import java.util.*;

class Solution {
    public static int swimInWater(int[][] grid) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(swimInWater(new int[][]{{0,2},{1,3}}));
        System.out.println(swimInWater(new int[][]{
            {0,1,2,3,4},
            {24,23,22,21,5},
            {12,13,14,15,16},
            {11,17,18,19,20},
            {10,9,8,7,6}
        }));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int swimInWater(vector<vector<int>>& grid) {
    // Write your solution here
    return 0;
}

int main() {
    vector<vector<int>> g1 = {{0,2},{1,3}};
    vector<vector<int>> g2 = {
        {0,1,2,3,4},
        {24,23,22,21,5},
        {12,13,14,15,16},
        {11,17,18,19,20},
        {10,9,8,7,6}
    };

    cout << swimInWater(g1) << endl;
    cout << swimInWater(g2) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int SwimInWater(int[][] grid) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(SwimInWater(new int[][] {
            new int[]{0,2}, new int[]{1,3}
        }));
        Console.WriteLine(SwimInWater(new int[][] {
            new int[]{0,1,2,3,4},
            new int[]{24,23,22,21,5},
            new int[]{12,13,14,15,16},
            new int[]{11,17,18,19,20},
            new int[]{10,9,8,7,6}
        }));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for swim in rising water

int main() {
    printf("Swim In Rising Water execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "3\n16",
      python: "3\n16",
      java: "3\n16",
      cpp: "3\n16",
      csharp: "3\n16",
      c: "Swim In Rising Water execution",
    },
  },
  "alien-dictionary": {
    id: "alien-dictionary",
    title: "Alien Dictionary",
    difficulty: "Hard",
    category: "Graph • Topological Sort • BFS",
    description: {
      text: "There is a new alien language that uses the English alphabet. However, the order of the letters is unknown to you.",
      notes: [
        "You are given a list of strings words from the alien language’s dictionary.",
        "The strings are sorted lexicographically by the rules of this new language.",
        "Return a string of the unique letters in the new language sorted in lexicographically increasing order.",
        "If there is no valid ordering, return an empty string.",
        "If there are multiple valid orderings, return any of them.",
      ],
    },
    examples: [
      {
        input: 'words = ["wrt","wrf","er","ett","rftt"]',
        output: '"wertf"',
      },
      {
        input: 'words = ["z","x"]',
        output: '"zx"',
      },
      {
        input: 'words = ["z","x","z"]',
        output: '""',
      },
    ],
    constraints: [
      "1 ≤ words.length ≤ 100",
      "1 ≤ words[i].length ≤ 100",
      "words[i] consists of only lowercase English letters",
    ],
    starterCode: {
      javascript: `function alienOrder(words) {
  // Write your solution here

}

// Test cases
console.log(alienOrder(["wrt","wrf","er","ett","rftt"])); // Expected: "wertf"
console.log(alienOrder(["z","x"])); // Expected: "zx"
console.log(alienOrder(["z","x","z"])); // Expected: ""`,
      python: `def alienOrder(words):
    # Write your solution here
    pass

# Test cases
print(alienOrder(["wrt","wrf","er","ett","rftt"]))
print(alienOrder(["z","x"]))
print(alienOrder(["z","x","z"]))`,
      java: `import java.util.*;

class Solution {
    public static String alienOrder(String[] words) {
        // Write your solution here
        return "";
    }

    public static void main(String[] args) {
        System.out.println(alienOrder(new String[]{"wrt","wrf","er","ett","rftt"}));
        System.out.println(alienOrder(new String[]{"z","x"}));
        System.out.println(alienOrder(new String[]{"z","x","z"}));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

string alienOrder(vector<string>& words) {
    // Write your solution here
    return "";
}

int main() {
    vector<string> w1 = {"wrt","wrf","er","ett","rftt"};
    vector<string> w2 = {"z","x"};
    vector<string> w3 = {"z","x","z"};

    cout << alienOrder(w1) << endl;
    cout << alienOrder(w2) << endl;
    cout << alienOrder(w3) << endl;
}`,
      csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static string AlienOrder(string[] words) {
        // Write your solution here
        return "";
    }

    static void Main() {
        Console.WriteLine(AlienOrder(new string[]{"wrt","wrf","er","ett","rftt"}));
        Console.WriteLine(AlienOrder(new string[]{"z","x"}));
        Console.WriteLine(AlienOrder(new string[]{"z","x","z"}));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for alien dictionary

int main() {
    printf("Alien Dictionary execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "wertf\nzx\n",
      python: "wertf\nzx\n",
      java: "wertf\nzx\n",
      cpp: "wertf\nzx\n",
      csharp: "wertf\nzx\n",
      c: "Alien Dictionary execution",
    },
  },
  "cheapest-flights-within-k-stops": {
    id: "cheapest-flights-within-k-stops",
    title: "Cheapest Flights Within K Stops",
    difficulty: "Medium",
    category: "Graph • BFS • Dijkstra • Dynamic Programming",
    description: {
      text: "There are n cities connected by some number of flights.",
      notes: [
        "You are given an array flights where flights[i] = [fromi, toi, pricei].",
        "Given src, dst, and k, return the cheapest price from src to dst with at most k stops.",
        "If there is no such route, return -1.",
      ],
    },
    examples: [
      {
        input:
          "n = 4, flights = [[0,1,100],[1,2,100],[2,3,100],[0,2,500]], src = 0, dst = 3, k = 1",
        output: "700",
      },
      {
        input:
          "n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1",
        output: "200",
      },
    ],
    constraints: [
      "1 ≤ n ≤ 100",
      "0 ≤ flights.length ≤ (n * (n - 1) / 2)",
      "flights[i].length == 3",
      "0 ≤ fromi, toi < n",
      "fromi != toi",
      "1 ≤ pricei ≤ 10⁴",
      "0 ≤ src, dst, k < n",
      "src != dst",
    ],
    starterCode: {
      javascript: `function findCheapestPrice(n, flights, src, dst, k) {
  // Write your solution here

}

// Test cases
console.log(findCheapestPrice(4, [[0,1,100],[1,2,100],[2,3,100],[0,2,500]], 0, 3, 1)); // Expected: 700
console.log(findCheapestPrice(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 1)); // Expected: 200`,
      python: `def findCheapestPrice(n, flights, src, dst, k):
    # Write your solution here
    pass

# Test cases
print(findCheapestPrice(4, [[0,1,100],[1,2,100],[2,3,100],[0,2,500]], 0, 3, 1))
print(findCheapestPrice(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 1))`,
      java: `import java.util.*;

class Solution {
    public static int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
        // Write your solution here
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(findCheapestPrice(4, new int[][]{
            {0,1,100},{1,2,100},{2,3,100},{0,2,500}
        }, 0, 3, 1));
        System.out.println(findCheapestPrice(3, new int[][]{
            {0,1,100},{1,2,100},{0,2,500}
        }, 0, 2, 1));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int findCheapestPrice(int n, vector<vector<int>>& flights, int src, int dst, int k) {
    // Write your solution here
    return -1;
}

int main() {
    vector<vector<int>> f1 = {{0,1,100},{1,2,100},{2,3,100},{0,2,500}};
    vector<vector<int>> f2 = {{0,1,100},{1,2,100},{0,2,500}};

    cout << findCheapestPrice(4, f1, 0, 3, 1) << endl;
    cout << findCheapestPrice(3, f2, 0, 2, 1) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int FindCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
        // Write your solution here
        return -1;
    }

    static void Main() {
        Console.WriteLine(FindCheapestPrice(4, new int[][] {
            new int[]{0,1,100}, new int[]{1,2,100}, new int[]{2,3,100}, new int[]{0,2,500}
        }, 0, 3, 1));

        Console.WriteLine(FindCheapestPrice(3, new int[][] {
            new int[]{0,1,100}, new int[]{1,2,100}, new int[]{0,2,500}
        }, 0, 2, 1));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for cheapest flights

int main() {
    printf("Cheapest Flights execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "700\n200",
      python: "700\n200",
      java: "700\n200",
      cpp: "700\n200",
      csharp: "700\n200",
      c: "Cheapest Flights execution",
    },
  },

  //1 DP Programming
  "climbing-stairs": {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "Easy",
    category: "Dynamic Programming • Fibonacci",
    description: {
      text: "You are climbing a staircase. It takes n steps to reach the top.",
      notes: [
        "Each time you can either climb 1 or 2 steps.",
        "In how many distinct ways can you climb to the top?",
      ],
    },
    examples: [
      {
        input: "n = 2",
        output: "2",
      },
      {
        input: "n = 3",
        output: "3",
      },
    ],
    constraints: ["1 ≤ n ≤ 45"],
    starterCode: {
      javascript: `function climbStairs(n) {
  // Write your solution here

}

// Test cases
console.log(climbStairs(2)); // Expected: 2
console.log(climbStairs(3)); // Expected: 3`,
      python: `def climbStairs(n):
    # Write your solution here
    pass

# Test cases
print(climbStairs(2))  # Expected: 2
print(climbStairs(3))  # Expected: 3`,
      java: `class Solution {
    public static int climbStairs(int n) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(climbStairs(2));
        System.out.println(climbStairs(3));
    }
}`,
      cpp: `#include <iostream>
using namespace std;

int climbStairs(int n) {
    // Write your solution here
    return 0;
}

int main() {
    cout << climbStairs(2) << endl;
    cout << climbStairs(3) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int ClimbStairs(int n) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(ClimbStairs(2));
        Console.WriteLine(ClimbStairs(3));
    }
}`,
      c: `#include <stdio.h>

int climbStairs(int n) {
    // Write your solution here
    return 0;
}

int main() {
    printf("%d\n", climbStairs(2));
    printf("%d\n", climbStairs(3));
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "2\n3",
      python: "2\n3",
      java: "2\n3",
      cpp: "2\n3",
      csharp: "2\n3",
      c: "2\n3",
    },
  },
  "min-cost-climbing-stairs": {
    id: "min-cost-climbing-stairs",
    title: "Min Cost Climbing Stairs",
    difficulty: "Easy",
    category: "Dynamic Programming",
    description: {
      text: "You are given an integer array cost where cost[i] is the cost of ith step on a staircase.",
      notes: [
        "Once you pay the cost, you can either climb one or two steps.",
        "You can either start from step 0 or step 1.",
        "Return the minimum cost to reach the top of the floor.",
      ],
    },
    examples: [
      {
        input: "cost = [10,15,20]",
        output: "15",
      },
      {
        input: "cost = [1,100,1,1,1,100,1,1,100,1]",
        output: "6",
      },
    ],
    constraints: ["2 ≤ cost.length ≤ 1000", "0 ≤ cost[i] ≤ 999"],
    starterCode: {
      javascript: `function minCostClimbingStairs(cost) {
  // Write your solution here

}

// Test cases
console.log(minCostClimbingStairs([10,15,20])); // Expected: 15
console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1])); // Expected: 6`,
      python: `def minCostClimbingStairs(cost):
    # Write your solution here
    pass

# Test cases
print(minCostClimbingStairs([10,15,20]))
print(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]))`,
      java: `class Solution {
    public static int minCostClimbingStairs(int[] cost) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(minCostClimbingStairs(new int[]{10,15,20}));
        System.out.println(minCostClimbingStairs(new int[]{1,100,1,1,1,100,1,1,100,1}));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int minCostClimbingStairs(vector<int>& cost) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> c1 = {10,15,20};
    vector<int> c2 = {1,100,1,1,1,100,1,1,100,1};

    cout << minCostClimbingStairs(c1) << endl;
    cout << minCostClimbingStairs(c2) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int MinCostClimbingStairs(int[] cost) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(MinCostClimbingStairs(new int[]{10,15,20}));
        Console.WriteLine(MinCostClimbingStairs(new int[]{1,100,1,1,1,100,1,1,100,1}));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for min cost climbing stairs

int main() {
    printf("Min Cost Climbing Stairs execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "15\n6",
      python: "15\n6",
      java: "15\n6",
      cpp: "15\n6",
      csharp: "15\n6",
      c: "Min Cost Climbing Stairs execution",
    },
  },
  "house-robber": {
    id: "house-robber",
    title: "House Robber",
    difficulty: "Medium",
    category: "Dynamic Programming",
    description: {
      text: "You are a professional robber planning to rob houses along a street.",
      notes: [
        "Each house has a certain amount of money stashed.",
        "Adjacent houses have security systems connected and cannot be robbed on the same night.",
        "Return the maximum amount of money you can rob without alerting the police.",
      ],
    },
    examples: [
      {
        input: "nums = [1,2,3,1]",
        output: "4",
      },
      {
        input: "nums = [2,7,9,3,1]",
        output: "12",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 100", "0 ≤ nums[i] ≤ 400"],
    starterCode: {
      javascript: `function rob(nums) {
  // Write your solution here

}

// Test cases
console.log(rob([1,2,3,1])); // Expected: 4
console.log(rob([2,7,9,3,1])); // Expected: 12`,
      python: `def rob(nums):
    # Write your solution here
    pass

# Test cases
print(rob([1,2,3,1]))  # Expected: 4
print(rob([2,7,9,3,1]))  # Expected: 12`,
      java: `class Solution {
    public static int rob(int[] nums) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(rob(new int[]{1,2,3,1}));
        System.out.println(rob(new int[]{2,7,9,3,1}));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int rob(vector<int>& nums) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> n1 = {1,2,3,1};
    vector<int> n2 = {2,7,9,3,1};

    cout << rob(n1) << endl;
    cout << rob(n2) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int Rob(int[] nums) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(Rob(new int[]{1,2,3,1}));
        Console.WriteLine(Rob(new int[]{2,7,9,3,1}));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for house robber

int main() {
    printf("House Robber execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "4\n12",
      python: "4\n12",
      java: "4\n12",
      cpp: "4\n12",
      csharp: "4\n12",
      c: "House Robber execution",
    },
  },
  "house-robber-ii": {
    id: "house-robber-ii",
    title: "House Robber II",
    difficulty: "Medium",
    category: "Dynamic Programming",
    description: {
      text: "You are a professional robber planning to rob houses along a street arranged in a circle.",
      notes: [
        "Each house has a certain amount of money stashed.",
        "Adjacent houses cannot be robbed on the same night.",
        "The first and last houses are also adjacent because the houses are in a circle.",
        "Return the maximum amount of money you can rob without alerting the police.",
      ],
    },
    examples: [
      {
        input: "nums = [2,3,2]",
        output: "3",
      },
      {
        input: "nums = [1,2,3,1]",
        output: "4",
      },
      {
        input: "nums = [1,2,3]",
        output: "3",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 100", "0 ≤ nums[i] ≤ 1000"],
    starterCode: {
      javascript: `function rob(nums) {
  // Write your solution here

}

// Test cases
console.log(rob([2,3,2])); // Expected: 3
console.log(rob([1,2,3,1])); // Expected: 4
console.log(rob([1,2,3])); // Expected: 3`,
      python: `def rob(nums):
    # Write your solution here
    pass

# Test cases
print(rob([2,3,2]))  # Expected: 3
print(rob([1,2,3,1]))  # Expected: 4
print(rob([1,2,3]))  # Expected: 3`,
      java: `class Solution {
    public static int rob(int[] nums) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(rob(new int[]{2,3,2}));
        System.out.println(rob(new int[]{1,2,3,1}));
        System.out.println(rob(new int[]{1,2,3}));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int rob(vector<int>& nums) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> n1 = {2,3,2};
    vector<int> n2 = {1,2,3,1};
    vector<int> n3 = {1,2,3};

    cout << rob(n1) << endl;
    cout << rob(n2) << endl;
    cout << rob(n3) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int Rob(int[] nums) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(Rob(new int[]{2,3,2}));
        Console.WriteLine(Rob(new int[]{1,2,3,1}));
        Console.WriteLine(Rob(new int[]{1,2,3}));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for house robber II

int main() {
    printf("House Robber II execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "3\n4\n3",
      python: "3\n4\n3",
      java: "3\n4\n3",
      cpp: "3\n4\n3",
      csharp: "3\n4\n3",
      c: "House Robber II execution",
    },
  },
  "longest-palindromic-substring": {
    id: "longest-palindromic-substring",
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    category: "Dynamic Programming • String",
    description: {
      text: "Given a string s, return the longest palindromic substring in s.",
      notes: [
        "A palindrome is a string that reads the same forward and backward.",
        "There may be multiple answers; return any one of them.",
      ],
    },
    examples: [
      {
        input: 's = "babad"',
        output: '"bab"',
      },
      {
        input: 's = "cbbd"',
        output: '"bb"',
      },
    ],
    constraints: [
      "1 ≤ s.length ≤ 1000",
      "s consists of only digits and English letters",
    ],
    starterCode: {
      javascript: `function longestPalindrome(s) {
  // Write your solution here

}

// Test cases
console.log(longestPalindrome("babad")); // Expected: "bab" or "aba"
console.log(longestPalindrome("cbbd")); // Expected: "bb"`,
      python: `def longestPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(longestPalindrome("babad"))
print(longestPalindrome("cbbd"))`,
      java: `class Solution {
    public static String longestPalindrome(String s) {
        // Write your solution here
        return "";
    }

    public static void main(String[] args) {
        System.out.println(longestPalindrome("babad"));
        System.out.println(longestPalindrome("cbbd"));
    }
}`,
      cpp: `#include <iostream>
#include <string>
using namespace std;

string longestPalindrome(string s) {
    // Write your solution here
    return "";
}

int main() {
    cout << longestPalindrome("babad") << endl;
    cout << longestPalindrome("cbbd") << endl;
}`,
      csharp: `using System;

class Solution {
    public static string LongestPalindrome(string s) {
        // Write your solution here
        return "";
    }

    static void Main() {
        Console.WriteLine(LongestPalindrome("babad"));
        Console.WriteLine(LongestPalindrome("cbbd"));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for longest palindromic substring

int main() {
    printf("Longest Palindromic Substring execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "bab or aba\nbb",
      python: "bab or aba\nbb",
      java: "bab or aba\nbb",
      cpp: "bab or aba\nbb",
      csharp: "bab or aba\nbb",
      c: "Longest Palindromic Substring execution",
    },
  },
  "palindromic-substrings": {
    id: "palindromic-substrings",
    title: "Palindromic Substrings",
    difficulty: "Medium",
    category: "Dynamic Programming • String",
    description: {
      text: "Given a string s, return the number of palindromic substrings in it.",
      notes: [
        "A substring is a contiguous sequence of characters within the string.",
        "A palindrome reads the same forward and backward.",
        "Single characters are palindromes.",
      ],
    },
    examples: [
      {
        input: 's = "abc"',
        output: "3",
      },
      {
        input: 's = "aaa"',
        output: "6",
      },
    ],
    constraints: [
      "1 ≤ s.length ≤ 1000",
      "s consists of lowercase English letters",
    ],
    starterCode: {
      javascript: `function countSubstrings(s) {
  // Write your solution here

}

// Test cases
console.log(countSubstrings("abc")); // Expected: 3
console.log(countSubstrings("aaa")); // Expected: 6`,
      python: `def countSubstrings(s):
    # Write your solution here
    pass

# Test cases
print(countSubstrings("abc"))  # Expected: 3
print(countSubstrings("aaa"))  # Expected: 6`,
      java: `class Solution {
    public static int countSubstrings(String s) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(countSubstrings("abc"));
        System.out.println(countSubstrings("aaa"));
    }
}`,
      cpp: `#include <iostream>
#include <string>
using namespace std;

int countSubstrings(string s) {
    // Write your solution here
    return 0;
}

int main() {
    cout << countSubstrings("abc") << endl;
    cout << countSubstrings("aaa") << endl;
}`,
      csharp: `using System;

class Solution {
    public static int CountSubstrings(string s) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(CountSubstrings("abc"));
        Console.WriteLine(CountSubstrings("aaa"));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for palindromic substrings

int main() {
    printf("Palindromic Substrings execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "3\n6",
      python: "3\n6",
      java: "3\n6",
      cpp: "3\n6",
      csharp: "3\n6",
      c: "Palindromic Substrings execution",
    },
  },
  "decode-ways": {
    id: "decode-ways",
    title: "Decode Ways",
    difficulty: "Medium",
    category: "Dynamic Programming • String",
    description: {
      text: "A message containing letters from A-Z can be encoded into numbers using the mapping 'A' -> 1, 'B' -> 2, ..., 'Z' -> 26.",
      notes: [
        "Given a string s containing only digits, return the number of ways to decode it.",
        "A leading zero is invalid and cannot be decoded.",
        "You may group digits into valid mappings (1 to 26).",
      ],
    },
    examples: [
      {
        input: 's = "12"',
        output: "2",
      },
      {
        input: 's = "226"',
        output: "3",
      },
      {
        input: 's = "06"',
        output: "0",
      },
    ],
    constraints: [
      "1 ≤ s.length ≤ 100",
      "s contains only digits and may contain leading zero(s)",
    ],
    starterCode: {
      javascript: `function numDecodings(s) {
  // Write your solution here

}

// Test cases
console.log(numDecodings("12")); // Expected: 2
console.log(numDecodings("226")); // Expected: 3
console.log(numDecodings("06")); // Expected: 0`,
      python: `def numDecodings(s):
    # Write your solution here
    pass

# Test cases
print(numDecodings("12"))  # Expected: 2
print(numDecodings("226"))  # Expected: 3
print(numDecodings("06"))  # Expected: 0`,
      java: `class Solution {
    public static int numDecodings(String s) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(numDecodings("12"));
        System.out.println(numDecodings("226"));
        System.out.println(numDecodings("06"));
    }
}`,
      cpp: `#include <iostream>
#include <string>
using namespace std;

int numDecodings(string s) {
    // Write your solution here
    return 0;
}

int main() {
    cout << numDecodings("12") << endl;
    cout << numDecodings("226") << endl;
    cout << numDecodings("06") << endl;
}`,
      csharp: `using System;

class Solution {
    public static int NumDecodings(string s) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(NumDecodings("12"));
        Console.WriteLine(NumDecodings("226"));
        Console.WriteLine(NumDecodings("06"));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for decode ways

int main() {
    printf("Decode Ways execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "2\n3\n0",
      python: "2\n3\n0",
      java: "2\n3\n0",
      cpp: "2\n3\n0",
      csharp: "2\n3\n0",
      c: "Decode Ways execution",
    },
  },
  "coin-change": {
    id: "coin-change",
    title: "Coin Change",
    difficulty: "Medium",
    category: "Dynamic Programming",
    description: {
      text: "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.",
      notes: [
        "Return the fewest number of coins needed to make up that amount.",
        "If that amount of money cannot be made up by any combination of the coins, return -1.",
        "You may assume that you have an infinite number of each kind of coin.",
      ],
    },
    examples: [
      {
        input: "coins = [1,2,5], amount = 11",
        output: "3",
      },
      {
        input: "coins = [2], amount = 3",
        output: "-1",
      },
      {
        input: "coins = [1], amount = 0",
        output: "0",
      },
    ],
    constraints: [
      "1 ≤ coins.length ≤ 12",
      "1 ≤ coins[i] ≤ 2³¹ - 1",
      "0 ≤ amount ≤ 10⁴",
    ],
    starterCode: {
      javascript: `function coinChange(coins, amount) {
  // Write your solution here

}

// Test cases
console.log(coinChange([1,2,5], 11)); // Expected: 3
console.log(coinChange([2], 3)); // Expected: -1
console.log(coinChange([1], 0)); // Expected: 0`,
      python: `def coinChange(coins, amount):
    # Write your solution here
    pass

# Test cases
print(coinChange([1,2,5], 11))
print(coinChange([2], 3))
print(coinChange([1], 0))`,
      java: `class Solution {
    public static int coinChange(int[] coins, int amount) {
        // Write your solution here
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(coinChange(new int[]{1,2,5}, 11));
        System.out.println(coinChange(new int[]{2}, 3));
        System.out.println(coinChange(new int[]{1}, 0));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int coinChange(vector<int>& coins, int amount) {
    // Write your solution here
    return -1;
}

int main() {
    vector<int> c1 = {1,2,5};
    vector<int> c2 = {2};
    vector<int> c3 = {1};

    cout << coinChange(c1, 11) << endl;
    cout << coinChange(c2, 3) << endl;
    cout << coinChange(c3, 0) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int CoinChange(int[] coins, int amount) {
        // Write your solution here
        return -1;
    }

    static void Main() {
        Console.WriteLine(CoinChange(new int[]{1,2,5}, 11));
        Console.WriteLine(CoinChange(new int[]{2}, 3));
        Console.WriteLine(CoinChange(new int[]{1}, 0));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for coin change

int main() {
    printf("Coin Change execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "3\n-1\n0",
      python: "3\n-1\n0",
      java: "3\n-1\n0",
      cpp: "3\n-1\n0",
      csharp: "3\n-1\n0",
      c: "Coin Change execution",
    },
  },
  "maximum-product-subarray": {
    id: "maximum-product-subarray",
    title: "Maximum Product Subarray",
    difficulty: "Medium",
    category: "Dynamic Programming • Array",
    description: {
      text: "Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.",
      notes: [
        "The result is guaranteed to fit in a 32-bit integer.",
        "The array may contain negative numbers and zeros.",
      ],
    },
    examples: [
      {
        input: "nums = [2,3,-2,4]",
        output: "6",
      },
      {
        input: "nums = [-2,0,-1]",
        output: "0",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 2 * 10⁴", "-10 ≤ nums[i] ≤ 10"],
    starterCode: {
      javascript: `function maxProduct(nums) {
  // Write your solution here

}

// Test cases
console.log(maxProduct([2,3,-2,4])); // Expected: 6
console.log(maxProduct([-2,0,-1])); // Expected: 0`,
      python: `def maxProduct(nums):
    # Write your solution here
    pass

# Test cases
print(maxProduct([2,3,-2,4]))
print(maxProduct([-2,0,-1]))`,
      java: `class Solution {
    public static int maxProduct(int[] nums) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxProduct(new int[]{2,3,-2,4}));
        System.out.println(maxProduct(new int[]{-2,0,-1}));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int maxProduct(vector<int>& nums) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> n1 = {2,3,-2,4};
    vector<int> n2 = {-2,0,-1};

    cout << maxProduct(n1) << endl;
    cout << maxProduct(n2) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int MaxProduct(int[] nums) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(MaxProduct(new int[]{2,3,-2,4}));
        Console.WriteLine(MaxProduct(new int[]{-2,0,-1}));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for maximum product subarray

int main() {
    printf("Maximum Product Subarray execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "6\n0",
      python: "6\n0",
      java: "6\n0",
      cpp: "6\n0",
      csharp: "6\n0",
      c: "Maximum Product Subarray execution",
    },
  },
  "word-break": {
    id: "word-break",
    title: "Word Break",
    difficulty: "Medium",
    category: "Dynamic Programming • String",
    description: {
      text: "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.",
      notes: [
        "The same word in the dictionary may be reused multiple times in the segmentation.",
        "All strings consist of lowercase English letters.",
      ],
    },
    examples: [
      {
        input: 's = "leetcode", wordDict = ["leet","code"]',
        output: "true",
      },
      {
        input: 's = "applepenapple", wordDict = ["apple","pen"]',
        output: "true",
      },
      {
        input: 's = "catsandog", wordDict = ["cats","dog","sand","and","cat"]',
        output: "false",
      },
    ],
    constraints: [
      "1 ≤ s.length ≤ 300",
      "1 ≤ wordDict.length ≤ 1000",
      "1 ≤ wordDict[i].length ≤ 20",
    ],
    starterCode: {
      javascript: `function wordBreak(s, wordDict) {
  // Write your solution here

}

// Test cases
console.log(wordBreak("leetcode", ["leet","code"])); // Expected: true
console.log(wordBreak("applepenapple", ["apple","pen"])); // Expected: true
console.log(wordBreak("catsandog", ["cats","dog","sand","and","cat"])); // Expected: false`,
      python: `def wordBreak(s, wordDict):
    # Write your solution here
    pass

# Test cases
print(wordBreak("leetcode", ["leet","code"]))
print(wordBreak("applepenapple", ["apple","pen"]))
print(wordBreak("catsandog", ["cats","dog","sand","and","cat"]))`,
      java: `import java.util.*;

class Solution {
    public static boolean wordBreak(String s, List<String> wordDict) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(wordBreak("leetcode", Arrays.asList("leet","code")));
        System.out.println(wordBreak("applepenapple", Arrays.asList("apple","pen")));
        System.out.println(wordBreak("catsandog", Arrays.asList("cats","dog","sand","and","cat")));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

bool wordBreak(string s, vector<string>& wordDict) {
    // Write your solution here
    return false;
}

int main() {
    vector<string> d1 = {"leet","code"};
    vector<string> d2 = {"apple","pen"};
    vector<string> d3 = {"cats","dog","sand","and","cat"};

    cout << wordBreak("leetcode", d1) << endl;
    cout << wordBreak("applepenapple", d2) << endl;
    cout << wordBreak("catsandog", d3) << endl;
}`,
      csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static bool WordBreak(string s, IList<string> wordDict) {
        // Write your solution here
        return false;
    }

    static void Main() {
        Console.WriteLine(WordBreak("leetcode", new List<string>{"leet","code"}));
        Console.WriteLine(WordBreak("applepenapple", new List<string>{"apple","pen"}));
        Console.WriteLine(WordBreak("catsandog", new List<string>{"cats","dog","sand","and","cat"}));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for word break

int main() {
    printf("Word Break execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\ntrue\nfalse",
      python: "True\nTrue\nFalse",
      java: "true\ntrue\nfalse",
      cpp: "1\n1\n0",
      csharp: "True\nTrue\nFalse",
      c: "Word Break execution",
    },
  },
  "longest-increasing-subsequence": {
    id: "longest-increasing-subsequence",
    title: "Longest Increasing Subsequence",
    difficulty: "Medium",
    category: "Dynamic Programming • Binary Search",
    description: {
      text: "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
      notes: [
        "A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements.",
      ],
    },
    examples: [
      {
        input: "nums = [10,9,2,5,3,7,101,18]",
        output: "4",
      },
      {
        input: "nums = [0,1,0,3,2,3]",
        output: "4",
      },
      {
        input: "nums = [7,7,7,7,7,7,7]",
        output: "1",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 2500", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function lengthOfLIS(nums) {
  // Write your solution here

}

// Test cases
console.log(lengthOfLIS([10,9,2,5,3,7,101,18])); // Expected: 4
console.log(lengthOfLIS([0,1,0,3,2,3])); // Expected: 4
console.log(lengthOfLIS([7,7,7,7,7,7,7])); // Expected: 1`,
      python: `def lengthOfLIS(nums):
    # Write your solution here
    pass

# Test cases
print(lengthOfLIS([10,9,2,5,3,7,101,18]))
print(lengthOfLIS([0,1,0,3,2,3]))
print(lengthOfLIS([7,7,7,7,7,7,7]))`,
      java: `class Solution {
    public static int lengthOfLIS(int[] nums) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(lengthOfLIS(new int[]{10,9,2,5,3,7,101,18}));
        System.out.println(lengthOfLIS(new int[]{0,1,0,3,2,3}));
        System.out.println(lengthOfLIS(new int[]{7,7,7,7,7,7,7}));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int lengthOfLIS(vector<int>& nums) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> n1 = {10,9,2,5,3,7,101,18};
    vector<int> n2 = {0,1,0,3,2,3};
    vector<int> n3 = {7,7,7,7,7,7,7};

    cout << lengthOfLIS(n1) << endl;
    cout << lengthOfLIS(n2) << endl;
    cout << lengthOfLIS(n3) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int LengthOfLIS(int[] nums) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(LengthOfLIS(new int[]{10,9,2,5,3,7,101,18}));
        Console.WriteLine(LengthOfLIS(new int[]{0,1,0,3,2,3}));
        Console.WriteLine(LengthOfLIS(new int[]{7,7,7,7,7,7,7}));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for LIS

int main() {
    printf("Longest Increasing Subsequence execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "4\n4\n1",
      python: "4\n4\n1",
      java: "4\n4\n1",
      cpp: "4\n4\n1",
      csharp: "4\n4\n1",
      c: "Longest Increasing Subsequence execution",
    },
  },
  "partition-equal-subset-sum": {
    id: "partition-equal-subset-sum",
    title: "Partition Equal Subset Sum",
    difficulty: "Medium",
    category: "Dynamic Programming • Knapsack",
    description: {
      text: "Given a non-empty array nums containing only positive integers, determine if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.",
      notes: [
        "This is a classic 0/1 knapsack problem.",
        "The goal is to check if a subset with sum = totalSum / 2 exists.",
      ],
    },
    examples: [
      {
        input: "nums = [1,5,11,5]",
        output: "true",
      },
      {
        input: "nums = [1,2,3,5]",
        output: "false",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 200", "1 ≤ nums[i] ≤ 100"],
    starterCode: {
      javascript: `function canPartition(nums) {
  // Write your solution here

}

// Test cases
console.log(canPartition([1,5,11,5])); // Expected: true
console.log(canPartition([1,2,3,5])); // Expected: false`,
      python: `def canPartition(nums):
    # Write your solution here
    pass

# Test cases
print(canPartition([1,5,11,5]))  # Expected: True
print(canPartition([1,2,3,5]))  # Expected: False`,
      java: `class Solution {
    public static boolean canPartition(int[] nums) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(canPartition(new int[]{1,5,11,5}));
        System.out.println(canPartition(new int[]{1,2,3,5}));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

bool canPartition(vector<int>& nums) {
    // Write your solution here
    return false;
}

int main() {
    vector<int> n1 = {1,5,11,5};
    vector<int> n2 = {1,2,3,5};

    cout << canPartition(n1) << endl;
    cout << canPartition(n2) << endl;
}`,
      csharp: `using System;

class Solution {
    public static bool CanPartition(int[] nums) {
        // Write your solution here
        return false;
    }

    static void Main() {
        Console.WriteLine(CanPartition(new int[]{1,5,11,5}));
        Console.WriteLine(CanPartition(new int[]{1,2,3,5}));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for partition equal subset sum

int main() {
    printf("Partition Equal Subset Sum execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
      cpp: "1\n0",
      csharp: "True\nFalse",
      c: "Partition Equal Subset Sum execution",
    },
  },

  //2 DP Programming
  "unique-paths": {
    id: "unique-paths",
    title: "Unique Paths",
    difficulty: "Medium",
    category: "Dynamic Programming • Combinatorics",
    description: {
      text: "There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]).",
      notes: [
        "The robot can only move either down or right at any point in time.",
        "The robot is trying to reach the bottom-right corner (i.e., grid[m-1][n-1]).",
        "Return the number of possible unique paths.",
      ],
    },
    examples: [
      {
        input: "m = 3, n = 7",
        output: "28",
      },
      {
        input: "m = 3, n = 2",
        output: "3",
      },
    ],
    constraints: [
      "1 ≤ m, n ≤ 100",
      "The answer will be less than or equal to 2 * 10⁹",
    ],
    starterCode: {
      javascript: `function uniquePaths(m, n) {
  // Write your solution here

}

// Test cases
console.log(uniquePaths(3, 7)); // Expected: 28
console.log(uniquePaths(3, 2)); // Expected: 3`,
      python: `def uniquePaths(m, n):
    # Write your solution here
    pass

# Test cases
print(uniquePaths(3, 7))
print(uniquePaths(3, 2))`,
      java: `class Solution {
    public static int uniquePaths(int m, int n) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(uniquePaths(3, 7));
        System.out.println(uniquePaths(3, 2));
    }
}`,
      cpp: `#include <iostream>
using namespace std;

int uniquePaths(int m, int n) {
    // Write your solution here
    return 0;
}

int main() {
    cout << uniquePaths(3, 7) << endl;
    cout << uniquePaths(3, 2) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int UniquePaths(int m, int n) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(UniquePaths(3, 7));
        Console.WriteLine(UniquePaths(3, 2));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for unique paths

int main() {
    printf("Unique Paths execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "28\n3",
      python: "28\n3",
      java: "28\n3",
      cpp: "28\n3",
      csharp: "28\n3",
      c: "Unique Paths execution",
    },
  },
  "longest-common-subsequence": {
    id: "longest-common-subsequence",
    title: "Longest Common Subsequence",
    difficulty: "Medium",
    category: "Dynamic Programming • String",
    description: {
      text: "Given two strings text1 and text2, return the length of their longest common subsequence.",
      notes: [
        "A subsequence of a string is a new string generated from the original string with some characters deleted (can be none) without changing the relative order of the remaining characters.",
        "A common subsequence is a subsequence that is common to both strings.",
        "If there is no common subsequence, return 0.",
      ],
    },
    examples: [
      {
        input: 'text1 = "abcde", text2 = "ace"',
        output: "3",
      },
      {
        input: 'text1 = "abc", text2 = "abc"',
        output: "3",
      },
      {
        input: 'text1 = "abc", text2 = "def"',
        output: "0",
      },
    ],
    constraints: [
      "1 ≤ text1.length, text2.length ≤ 1000",
      "text1 and text2 consist of only lowercase English characters",
    ],
    starterCode: {
      javascript: `function longestCommonSubsequence(text1, text2) {
  // Write your solution here

}

// Test cases
console.log(longestCommonSubsequence("abcde", "ace")); // Expected: 3
console.log(longestCommonSubsequence("abc", "abc")); // Expected: 3
console.log(longestCommonSubsequence("abc", "def")); // Expected: 0`,
      python: `def longestCommonSubsequence(text1, text2):
    # Write your solution here
    pass

# Test cases
print(longestCommonSubsequence("abcde", "ace"))
print(longestCommonSubsequence("abc", "abc"))
print(longestCommonSubsequence("abc", "def"))`,
      java: `class Solution {
    public static int longestCommonSubsequence(String text1, String text2) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(longestCommonSubsequence("abcde", "ace"));
        System.out.println(longestCommonSubsequence("abc", "abc"));
        System.out.println(longestCommonSubsequence("abc", "def"));
    }
}`,
      cpp: `#include <iostream>
#include <string>
using namespace std;

int longestCommonSubsequence(string text1, string text2) {
    // Write your solution here
    return 0;
}

int main() {
    cout << longestCommonSubsequence("abcde", "ace") << endl;
    cout << longestCommonSubsequence("abc", "abc") << endl;
    cout << longestCommonSubsequence("abc", "def") << endl;
}`,
      csharp: `using System;

class Solution {
    public static int LongestCommonSubsequence(string text1, string text2) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(LongestCommonSubsequence("abcde", "ace"));
        Console.WriteLine(LongestCommonSubsequence("abc", "abc"));
        Console.WriteLine(LongestCommonSubsequence("abc", "def"));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for LCS

int main() {
    printf("Longest Common Subsequence execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "3\n3\n0",
      python: "3\n3\n0",
      java: "3\n3\n0",
      cpp: "3\n3\n0",
      csharp: "3\n3\n0",
      c: "Longest Common Subsequence execution",
    },
  },
  "best-time-to-buy-and-sell-stock-with-cooldown": {
    id: "best-time-to-buy-and-sell-stock-with-cooldown",
    title: "Best Time to Buy and Sell Stock with Cooldown",
    difficulty: "Medium",
    category: "Dynamic Programming • State Machine",
    description: {
      text: "You are given an array prices where prices[i] is the price of a given stock on the ith day.",
      notes: [
        "Find the maximum profit you can achieve.",
        "You may complete as many transactions as you like (buy one and sell one share of the stock multiple times).",
        "After you sell your stock, you cannot buy stock on the next day (cooldown of 1 day).",
      ],
    },
    examples: [
      {
        input: "prices = [1,2,3,0,2]",
        output: "3",
      },
      {
        input: "prices = [1]",
        output: "0",
      },
    ],
    constraints: ["1 ≤ prices.length ≤ 5000", "0 ≤ prices[i] ≤ 1000"],
    starterCode: {
      javascript: `function maxProfit(prices) {
  // Write your solution here

}

// Test cases
console.log(maxProfit([1,2,3,0,2])); // Expected: 3
console.log(maxProfit([1])); // Expected: 0`,
      python: `def maxProfit(prices):
    # Write your solution here
    pass

# Test cases
print(maxProfit([1,2,3,0,2]))
print(maxProfit([1]))`,
      java: `class Solution {
    public static int maxProfit(int[] prices) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxProfit(new int[]{1,2,3,0,2}));
        System.out.println(maxProfit(new int[]{1}));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int maxProfit(vector<int>& prices) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> p1 = {1,2,3,0,2};
    vector<int> p2 = {1};

    cout << maxProfit(p1) << endl;
    cout << maxProfit(p2) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int MaxProfit(int[] prices) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(MaxProfit(new int[]{1,2,3,0,2}));
        Console.WriteLine(MaxProfit(new int[]{1}));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for stock with cooldown

int main() {
    printf("Stock With Cooldown execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "3\n0",
      python: "3\n0",
      java: "3\n0",
      cpp: "3\n0",
      csharp: "3\n0",
      c: "Stock With Cooldown execution",
    },
  },
  "coin-change-ii": {
    id: "coin-change-ii",
    title: "Coin Change II",
    difficulty: "Medium",
    category: "Dynamic Programming • Knapsack",
    description: {
      text: "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.",
      notes: [
        "Return the number of combinations that make up that amount.",
        "You may assume that you have an infinite number of each kind of coin.",
        "The order of coins does not matter.",
      ],
    },
    examples: [
      {
        input: "amount = 5, coins = [1,2,5]",
        output: "4",
      },
      {
        input: "amount = 3, coins = [2]",
        output: "0",
      },
      {
        input: "amount = 10, coins = [10]",
        output: "1",
      },
    ],
    constraints: [
      "1 ≤ coins.length ≤ 300",
      "1 ≤ coins[i] ≤ 5000",
      "All the values of coins are unique",
      "0 ≤ amount ≤ 5000",
    ],
    starterCode: {
      javascript: `function change(amount, coins) {
  // Write your solution here

}

// Test cases
console.log(change(5, [1,2,5])); // Expected: 4
console.log(change(3, [2])); // Expected: 0
console.log(change(10, [10])); // Expected: 1`,
      python: `def change(amount, coins):
    # Write your solution here
    pass

# Test cases
print(change(5, [1,2,5]))
print(change(3, [2]))
print(change(10, [10]))`,
      java: `class Solution {
    public static int change(int amount, int[] coins) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(change(5, new int[]{1,2,5}));
        System.out.println(change(3, new int[]{2}));
        System.out.println(change(10, new int[]{10}));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int change(int amount, vector<int>& coins) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> c1 = {1,2,5};
    vector<int> c2 = {2};
    vector<int> c3 = {10};

    cout << change(5, c1) << endl;
    cout << change(3, c2) << endl;
    cout << change(10, c3) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int Change(int amount, int[] coins) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(Change(5, new int[]{1,2,5}));
        Console.WriteLine(Change(3, new int[]{2}));
        Console.WriteLine(Change(10, new int[]{10}));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for coin change II

int main() {
    printf("Coin Change II execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "4\n0\n1",
      python: "4\n0\n1",
      java: "4\n0\n1",
      cpp: "4\n0\n1",
      csharp: "4\n0\n1",
      c: "Coin Change II execution",
    },
  },
  "target-sum": {
    id: "target-sum",
    title: "Target Sum",
    difficulty: "Medium",
    category: "Dynamic Programming • Knapsack",
    description: {
      text: "You are given an integer array nums and an integer target.",
      notes: [
        "You want to build an expression out of nums by adding one of the symbols '+' or '-' before each integer.",
        "Return the number of different expressions that you can build which evaluates to target.",
      ],
    },
    examples: [
      {
        input: "nums = [1,1,1,1,1], target = 3",
        output: "5",
      },
      {
        input: "nums = [1], target = 1",
        output: "1",
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 20",
      "0 ≤ nums[i] ≤ 1000",
      "0 ≤ sum(nums[i]) ≤ 1000",
      "-1000 ≤ target ≤ 1000",
    ],
    starterCode: {
      javascript: `function findTargetSumWays(nums, target) {
  // Write your solution here

}

// Test cases
console.log(findTargetSumWays([1,1,1,1,1], 3)); // Expected: 5
console.log(findTargetSumWays([1], 1)); // Expected: 1`,
      python: `def findTargetSumWays(nums, target):
    # Write your solution here
    pass

# Test cases
print(findTargetSumWays([1,1,1,1,1], 3))
print(findTargetSumWays([1], 1))`,
      java: `class Solution {
    public static int findTargetSumWays(int[] nums, int target) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(findTargetSumWays(new int[]{1,1,1,1,1}, 3));
        System.out.println(findTargetSumWays(new int[]{1}, 1));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int findTargetSumWays(vector<int>& nums, int target) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> n1 = {1,1,1,1,1};
    vector<int> n2 = {1};

    cout << findTargetSumWays(n1, 3) << endl;
    cout << findTargetSumWays(n2, 1) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int FindTargetSumWays(int[] nums, int target) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(FindTargetSumWays(new int[]{1,1,1,1,1}, 3));
        Console.WriteLine(FindTargetSumWays(new int[]{1}, 1));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for target sum

int main() {
    printf("Target Sum execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "5\n1",
      python: "5\n1",
      java: "5\n1",
      cpp: "5\n1",
      csharp: "5\n1",
      c: "Target Sum execution",
    },
  },
  "interleaving-string": {
    id: "interleaving-string",
    title: "Interleaving String",
    difficulty: "Medium",
    category: "Dynamic Programming • String",
    description: {
      text: "Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.",
      notes: [
        "An interleaving of two strings preserves the left-to-right order of characters from each string.",
        "You can pick characters from either s1 or s2, but must maintain their individual order.",
        "Return true if s3 can be formed, otherwise false.",
      ],
    },
    examples: [
      {
        input: 's1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"',
        output: "true",
      },
      {
        input: 's1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"',
        output: "false",
      },
      {
        input: 's1 = "", s2 = "", s3 = ""',
        output: "true",
      },
    ],
    constraints: [
      "0 ≤ s1.length, s2.length ≤ 100",
      "0 ≤ s3.length ≤ 200",
      "s1, s2, and s3 consist of lowercase English letters",
    ],
    starterCode: {
      javascript: `function isInterleave(s1, s2, s3) {
  // Write your solution here

}

// Test cases
console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac")); // Expected: true
console.log(isInterleave("aabcc", "dbbca", "aadbbbaccc")); // Expected: false
console.log(isInterleave("", "", "")); // Expected: true`,
      python: `def isInterleave(s1, s2, s3):
    # Write your solution here
    pass

# Test cases
print(isInterleave("aabcc", "dbbca", "aadbbcbcac"))
print(isInterleave("aabcc", "dbbca", "aadbbbaccc"))
print(isInterleave("", "", ""))`,
      java: `class Solution {
    public static boolean isInterleave(String s1, String s2, String s3) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isInterleave("aabcc", "dbbca", "aadbbcbcac"));
        System.out.println(isInterleave("aabcc", "dbbca", "aadbbbaccc"));
        System.out.println(isInterleave("", "", ""));
    }
}`,
      cpp: `#include <iostream>
#include <string>
using namespace std;

bool isInterleave(string s1, string s2, string s3) {
    // Write your solution here
    return false;
}

int main() {
    cout << isInterleave("aabcc", "dbbca", "aadbbcbcac") << endl;
    cout << isInterleave("aabcc", "dbbca", "aadbbbaccc") << endl;
    cout << isInterleave("", "", "") << endl;
}`,
      csharp: `using System;

class Solution {
    public static bool IsInterleave(string s1, string s2, string s3) {
        // Write your solution here
        return false;
    }

    static void Main() {
        Console.WriteLine(IsInterleave("aabcc", "dbbca", "aadbbcbcac"));
        Console.WriteLine(IsInterleave("aabcc", "dbbca", "aadbbbaccc"));
        Console.WriteLine(IsInterleave("", "", ""));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for interleaving string

int main() {
    printf("Interleaving String execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
      cpp: "1\n0\n1",
      csharp: "True\nFalse\nTrue",
      c: "Interleaving String execution",
    },
  },
  "longest-increasing-path-in-a-matrix": {
    id: "longest-increasing-path-in-a-matrix",
    title: "Longest Increasing Path in a Matrix",
    difficulty: "Hard",
    category: "Graph • DFS • Memoization • Matrix",
    description: {
      text: "Given an m x n integers matrix, return the length of the longest increasing path in matrix.",
      notes: [
        "From each cell, you can move in four directions: up, down, left, or right.",
        "You may not move diagonally or move outside the boundary.",
        "Each move must go to a strictly increasing value.",
      ],
    },
    examples: [
      {
        input: "matrix = [[9,9,4],[6,6,8],[2,1,1]]",
        output: "4",
      },
      {
        input: "matrix = [[3,4,5],[3,2,6],[2,2,1]]",
        output: "4",
      },
    ],
    constraints: [
      "m == matrix.length",
      "n == matrix[i].length",
      "1 ≤ m, n ≤ 200",
      "0 ≤ matrix[i][j] ≤ 2³¹ - 1",
    ],
    starterCode: {
      javascript: `function longestIncreasingPath(matrix) {
  // Write your solution here

}

// Test cases
console.log(longestIncreasingPath([[9,9,4],[6,6,8],[2,1,1]])); // Expected: 4
console.log(longestIncreasingPath([[3,4,5],[3,2,6],[2,2,1]])); // Expected: 4`,
      python: `def longestIncreasingPath(matrix):
    # Write your solution here
    pass

# Test cases
print(longestIncreasingPath([[9,9,4],[6,6,8],[2,1,1]]))
print(longestIncreasingPath([[3,4,5],[3,2,6],[2,2,1]]))`,
      java: `class Solution {
    public static int longestIncreasingPath(int[][] matrix) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(longestIncreasingPath(new int[][]{{9,9,4},{6,6,8},{2,1,1}}));
        System.out.println(longestIncreasingPath(new int[][]{{3,4,5},{3,2,6},{2,2,1}}));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int longestIncreasingPath(vector<vector<int>>& matrix) {
    // Write your solution here
    return 0;
}

int main() {
    vector<vector<int>> m1 = {{9,9,4},{6,6,8},{2,1,1}};
    vector<vector<int>> m2 = {{3,4,5},{3,2,6},{2,2,1}};

    cout << longestIncreasingPath(m1) << endl;
    cout << longestIncreasingPath(m2) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int LongestIncreasingPath(int[][] matrix) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(LongestIncreasingPath(new int[][] {
            new int[]{9,9,4}, new int[]{6,6,8}, new int[]{2,1,1}
        }));
        Console.WriteLine(LongestIncreasingPath(new int[][] {
            new int[]{3,4,5}, new int[]{3,2,6}, new int[]{2,2,1}
        }));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for longest increasing path

int main() {
    printf("Longest Increasing Path execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "4\n4",
      python: "4\n4",
      java: "4\n4",
      cpp: "4\n4",
      csharp: "4\n4",
      c: "Longest Increasing Path execution",
    },
  },
  "distinct-subsequences": {
    id: "distinct-subsequences",
    title: "Distinct Subsequences",
    difficulty: "Hard",
    category: "Dynamic Programming • String",
    description: {
      text: "Given two strings s and t, return the number of distinct subsequences of s which equals t.",
      notes: [
        "A subsequence is a string formed from the original string by deleting some (or no) characters without disturbing the relative positions of the remaining characters.",
        "Return the count of distinct ways to form t from s.",
      ],
    },
    examples: [
      {
        input: 's = "rabbbit", t = "rabbit"',
        output: "3",
      },
      {
        input: 's = "babgbag", t = "bag"',
        output: "5",
      },
    ],
    constraints: [
      "1 ≤ s.length, t.length ≤ 1000",
      "s and t consist of English letters",
    ],
    starterCode: {
      javascript: `function numDistinct(s, t) {
  // Write your solution here

}

// Test cases
console.log(numDistinct("rabbbit", "rabbit")); // Expected: 3
console.log(numDistinct("babgbag", "bag")); // Expected: 5`,
      python: `def numDistinct(s, t):
    # Write your solution here
    pass

# Test cases
print(numDistinct("rabbbit", "rabbit"))
print(numDistinct("babgbag", "bag"))`,
      java: `class Solution {
    public static int numDistinct(String s, String t) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(numDistinct("rabbbit", "rabbit"));
        System.out.println(numDistinct("babgbag", "bag"));
    }
}`,
      cpp: `#include <iostream>
#include <string>
using namespace std;

int numDistinct(string s, string t) {
    // Write your solution here
    return 0;
}

int main() {
    cout << numDistinct("rabbbit", "rabbit") << endl;
    cout << numDistinct("babgbag", "bag") << endl;
}`,
      csharp: `using System;

class Solution {
    public static int NumDistinct(string s, string t) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(NumDistinct("rabbbit", "rabbit"));
        Console.WriteLine(NumDistinct("babgbag", "bag"));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for distinct subsequences

int main() {
    printf("Distinct Subsequences execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "3\n5",
      python: "3\n5",
      java: "3\n5",
      cpp: "3\n5",
      csharp: "3\n5",
      c: "Distinct Subsequences execution",
    },
  },
  "edit-distance": {
    id: "edit-distance",
    title: "Edit Distance",
    difficulty: "Medium",
    category: "Dynamic Programming • String",
    description: {
      text: "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.",
      notes: [
        "You have the following three operations permitted on a word:",
        "1. Insert a character",
        "2. Delete a character",
        "3. Replace a character",
      ],
    },
    examples: [
      {
        input: 'word1 = "horse", word2 = "ros"',
        output: "3",
      },
      {
        input: 'word1 = "intention", word2 = "execution"',
        output: "5",
      },
    ],
    constraints: [
      "0 ≤ word1.length, word2.length ≤ 500",
      "word1 and word2 consist of lowercase English letters",
    ],
    starterCode: {
      javascript: `function minDistance(word1, word2) {
  // Write your solution here

}

// Test cases
console.log(minDistance("horse", "ros")); // Expected: 3
console.log(minDistance("intention", "execution")); // Expected: 5`,
      python: `def minDistance(word1, word2):
    # Write your solution here
    pass

# Test cases
print(minDistance("horse", "ros"))
print(minDistance("intention", "execution"))`,
      java: `class Solution {
    public static int minDistance(String word1, String word2) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(minDistance("horse", "ros"));
        System.out.println(minDistance("intention", "execution"));
    }
}`,
      cpp: `#include <iostream>
#include <string>
using namespace std;

int minDistance(string word1, string word2) {
    // Write your solution here
    return 0;
}

int main() {
    cout << minDistance("horse", "ros") << endl;
    cout << minDistance("intention", "execution") << endl;
}`,
      csharp: `using System;

class Solution {
    public static int MinDistance(string word1, string word2) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(MinDistance("horse", "ros"));
        Console.WriteLine(MinDistance("intention", "execution"));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for edit distance

int main() {
    printf("Edit Distance execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "3\n5",
      python: "3\n5",
      java: "3\n5",
      cpp: "3\n5",
      csharp: "3\n5",
      c: "Edit Distance execution",
    },
  },
  "burst-balloons": {
    id: "burst-balloons",
    title: "Burst Balloons",
    difficulty: "Hard",
    category: "Dynamic Programming • Interval DP",
    description: {
      text: "You are given n balloons, indexed from 0 to n - 1. Each balloon is painted with a number on it represented by an array nums.",
      notes: [
        "You are asked to burst all the balloons.",
        "If you burst the ith balloon, you will get nums[i-1] * nums[i] * nums[i+1] coins.",
        "If i - 1 or i + 1 goes out of bounds, treat it as if there is a balloon with value 1.",
        "Return the maximum coins you can collect by bursting the balloons wisely.",
      ],
    },
    examples: [
      {
        input: "nums = [3,1,5,8]",
        output: "167",
      },
      {
        input: "nums = [1,5]",
        output: "10",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 300", "0 ≤ nums[i] ≤ 100"],
    starterCode: {
      javascript: `function maxCoins(nums) {
  // Write your solution here

}

// Test cases
console.log(maxCoins([3,1,5,8])); // Expected: 167
console.log(maxCoins([1,5])); // Expected: 10`,
      python: `def maxCoins(nums):
    # Write your solution here
    pass

# Test cases
print(maxCoins([3,1,5,8]))
print(maxCoins([1,5]))`,
      java: `class Solution {
    public static int maxCoins(int[] nums) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxCoins(new int[]{3,1,5,8}));
        System.out.println(maxCoins(new int[]{1,5}));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int maxCoins(vector<int>& nums) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> n1 = {3,1,5,8};
    vector<int> n2 = {1,5};

    cout << maxCoins(n1) << endl;
    cout << maxCoins(n2) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int MaxCoins(int[] nums) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(MaxCoins(new int[]{3,1,5,8}));
        Console.WriteLine(MaxCoins(new int[]{1,5}));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for burst balloons

int main() {
    printf("Burst Balloons execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "167\n10",
      python: "167\n10",
      java: "167\n10",
      cpp: "167\n10",
      csharp: "167\n10",
      c: "Burst Balloons execution",
    },
  },
  "regular-expression-matching": {
    id: "regular-expression-matching",
    title: "Regular Expression Matching",
    difficulty: "Hard",
    category: "Dynamic Programming • String",
    description: {
      text: "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*'.",
      notes: [
        "'.' Matches any single character.",
        "'*' Matches zero or more of the preceding element.",
        "The matching should cover the entire input string (not partial).",
      ],
    },
    examples: [
      {
        input: 's = "aa", p = "a"',
        output: "false",
      },
      {
        input: 's = "aa", p = "a*"',
        output: "true",
      },
      {
        input: 's = "ab", p = ".*"',
        output: "true",
      },
    ],
    constraints: [
      "1 ≤ s.length ≤ 20",
      "1 ≤ p.length ≤ 30",
      "s contains only lowercase English letters.",
      "p contains only lowercase English letters, '.', and '*'.",
      "It is guaranteed for each appearance of '*', there will be a previous valid character to match.",
    ],
    starterCode: {
      javascript: `function isMatch(s, p) {
  // Write your solution here

}

// Test cases
console.log(isMatch("aa", "a")); // Expected: false
console.log(isMatch("aa", "a*")); // Expected: true
console.log(isMatch("ab", ".*")); // Expected: true`,
      python: `def isMatch(s, p):
    # Write your solution here
    pass

# Test cases
print(isMatch("aa", "a"))
print(isMatch("aa", "a*"))
print(isMatch("ab", ".*"))`,
      java: `class Solution {
    public static boolean isMatch(String s, String p) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isMatch("aa", "a"));
        System.out.println(isMatch("aa", "a*"));
        System.out.println(isMatch("ab", ".*"));
    }
}`,
      cpp: `#include <iostream>
#include <string>
using namespace std;

bool isMatch(string s, string p) {
    // Write your solution here
    return false;
}

int main() {
    cout << isMatch("aa", "a") << endl;
    cout << isMatch("aa", "a*") << endl;
    cout << isMatch("ab", ".*") << endl;
}`,
      csharp: `using System;

class Solution {
    public static bool IsMatch(string s, string p) {
        // Write your solution here
        return false;
    }

    static void Main() {
        Console.WriteLine(IsMatch("aa", "a"));
        Console.WriteLine(IsMatch("aa", "a*"));
        Console.WriteLine(IsMatch("ab", ".*"));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for regex matching

int main() {
    printf("Regex Matching execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "false\ntrue\ntrue",
      python: "False\nTrue\nTrue",
      java: "false\ntrue\ntrue",
      cpp: "0\n1\n1",
      csharp: "False\nTrue\nTrue",
      c: "Regex Matching execution",
    },
  },

  //Greedy
  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here

}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here

        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int maxSubArray(vector<int>& nums) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> v1 = {-2,1,-3,4,-1,2,1,-5,4};
    vector<int> v2 = {1};
    vector<int> v3 = {5,4,-1,7,8};

    cout << maxSubArray(v1) << endl;
    cout << maxSubArray(v2) << endl;
    cout << maxSubArray(v3) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int MaxSubArray(int[] nums) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(MaxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4}));
        Console.WriteLine(MaxSubArray(new int[]{1}));
        Console.WriteLine(MaxSubArray(new int[]{5,4,-1,7,8}));
    }
}`,
      c: `#include <stdio.h>

int maxSubArray(int nums[], int n) {
    // Write your solution here
    return 0;
}

int main() {
    int a1[] = {-2,1,-3,4,-1,2,1,-5,4};
    int a2[] = {1};
    int a3[] = {5,4,-1,7,8};

    printf("%d\n", maxSubArray(a1, 9));
    printf("%d\n", maxSubArray(a2, 1));
    printf("%d\n", maxSubArray(a3, 5));

    return 0;
}`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
      cpp: "6\n1\n23",
      csharp: "6\n1\n23",
      c: "6\n1\n23",
    },
  },
  "jump-game": {
    id: "jump-game",
    title: "Jump Game",
    difficulty: "Medium",
    category: "Greedy • Dynamic Programming",
    description: {
      text: "You are given an integer array nums. You are initially positioned at the first index.",
      notes: [
        "Each element in the array represents your maximum jump length at that position.",
        "Return true if you can reach the last index, or false otherwise.",
      ],
    },
    examples: [
      {
        input: "nums = [2,3,1,1,4]",
        output: "true",
      },
      {
        input: "nums = [3,2,1,0,4]",
        output: "false",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁴", "0 ≤ nums[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function canJump(nums) {
  // Write your solution here

}

// Test cases
console.log(canJump([2,3,1,1,4])); // Expected: true
console.log(canJump([3,2,1,0,4])); // Expected: false`,
      python: `def canJump(nums):
    # Write your solution here
    pass

# Test cases
print(canJump([2,3,1,1,4]))
print(canJump([3,2,1,0,4]))`,
      java: `class Solution {
    public static boolean canJump(int[] nums) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(canJump(new int[]{2,3,1,1,4}));
        System.out.println(canJump(new int[]{3,2,1,0,4}));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

bool canJump(vector<int>& nums) {
    // Write your solution here
    return false;
}

int main() {
    vector<int> n1 = {2,3,1,1,4};
    vector<int> n2 = {3,2,1,0,4};

    cout << canJump(n1) << endl;
    cout << canJump(n2) << endl;
}`,
      csharp: `using System;

class Solution {
    public static bool CanJump(int[] nums) {
        // Write your solution here
        return false;
    }

    static void Main() {
        Console.WriteLine(CanJump(new int[]{2,3,1,1,4}));
        Console.WriteLine(CanJump(new int[]{3,2,1,0,4}));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for jump game

int main() {
    printf("Jump Game execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
      cpp: "1\n0",
      csharp: "True\nFalse",
      c: "Jump Game execution",
    },
  },
  "jump-game-ii": {
    id: "jump-game-ii",
    title: "Jump Game II",
    difficulty: "Medium",
    category: "Greedy • Dynamic Programming",
    description: {
      text: "You are given a 0-indexed array of integers nums of length n.",
      notes: [
        "You are initially positioned at nums[0].",
        "Each element nums[i] represents the maximum length of a forward jump from index i.",
        "Return the minimum number of jumps to reach nums[n - 1].",
        "You can assume that you can always reach the last index.",
      ],
    },
    examples: [
      {
        input: "nums = [2,3,1,1,4]",
        output: "2",
      },
      {
        input: "nums = [2,3,0,1,4]",
        output: "2",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁴", "0 ≤ nums[i] ≤ 1000"],
    starterCode: {
      javascript: `function jump(nums) {
  // Write your solution here

}

// Test cases
console.log(jump([2,3,1,1,4])); // Expected: 2
console.log(jump([2,3,0,1,4])); // Expected: 2`,
      python: `def jump(nums):
    # Write your solution here
    pass

# Test cases
print(jump([2,3,1,1,4]))
print(jump([2,3,0,1,4]))`,
      java: `class Solution {
    public static int jump(int[] nums) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(jump(new int[]{2,3,1,1,4}));
        System.out.println(jump(new int[]{2,3,0,1,4}));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int jump(vector<int>& nums) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> n1 = {2,3,1,1,4};
    vector<int> n2 = {2,3,0,1,4};

    cout << jump(n1) << endl;
    cout << jump(n2) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int Jump(int[] nums) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine(Jump(new int[]{2,3,1,1,4}));
        Console.WriteLine(Jump(new int[]{2,3,0,1,4}));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for jump game II

int main() {
    printf("Jump Game II execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "2\n2",
      python: "2\n2",
      java: "2\n2",
      cpp: "2\n2",
      csharp: "2\n2",
      c: "Jump Game II execution",
    },
  },
  "gas-station": {
    id: "gas-station",
    title: "Gas Station",
    difficulty: "Medium",
    category: "Greedy • Array",
    description: {
      text: "There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].",
      notes: [
        "You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i + 1).",
        "You begin the journey with an empty tank at one of the gas stations.",
        "Return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.",
        "If there exists a solution, it is guaranteed to be unique.",
      ],
    },
    examples: [
      {
        input: "gas = [1,2,3,4,5], cost = [3,4,5,1,2]",
        output: "3",
      },
      {
        input: "gas = [2,3,4], cost = [3,4,3]",
        output: "-1",
      },
    ],
    constraints: [
      "n == gas.length == cost.length",
      "1 ≤ n ≤ 10⁵",
      "0 ≤ gas[i], cost[i] ≤ 10⁴",
    ],
    starterCode: {
      javascript: `function canCompleteCircuit(gas, cost) {
  // Write your solution here

}

// Test cases
console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2])); // Expected: 3
console.log(canCompleteCircuit([2,3,4], [3,4,3])); // Expected: -1`,
      python: `def canCompleteCircuit(gas, cost):
    # Write your solution here
    pass

# Test cases
print(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]))
print(canCompleteCircuit([2,3,4], [3,4,3]))`,
      java: `class Solution {
    public static int canCompleteCircuit(int[] gas, int[] cost) {
        // Write your solution here
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(canCompleteCircuit(new int[]{1,2,3,4,5}, new int[]{3,4,5,1,2}));
        System.out.println(canCompleteCircuit(new int[]{2,3,4}, new int[]{3,4,3}));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int canCompleteCircuit(vector<int>& gas, vector<int>& cost) {
    // Write your solution here
    return -1;
}

int main() {
    vector<int> g1 = {1,2,3,4,5};
    vector<int> c1 = {3,4,5,1,2};
    vector<int> g2 = {2,3,4};
    vector<int> c2 = {3,4,3};

    cout << canCompleteCircuit(g1, c1) << endl;
    cout << canCompleteCircuit(g2, c2) << endl;
}`,
      csharp: `using System;

class Solution {
    public static int CanCompleteCircuit(int[] gas, int[] cost) {
        // Write your solution here
        return -1;
    }

    static void Main() {
        Console.WriteLine(CanCompleteCircuit(new int[]{1,2,3,4,5}, new int[]{3,4,5,1,2}));
        Console.WriteLine(CanCompleteCircuit(new int[]{2,3,4}, new int[]{3,4,3}));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for gas station

int main() {
    printf("Gas Station execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "3\n-1",
      python: "3\n-1",
      java: "3\n-1",
      cpp: "3\n-1",
      csharp: "3\n-1",
      c: "Gas Station execution",
    },
  },
  "hand-of-straights": {
    id: "hand-of-straights",
    title: "Hand of Straights",
    difficulty: "Medium",
    category: "Greedy • HashMap • Sorting",
    description: {
      text: "Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize.",
      notes: [
        "Each group must consist of consecutive cards.",
        "Return true if she can rearrange the cards, otherwise return false.",
      ],
    },
    examples: [
      {
        input: "hand = [1,2,3,6,2,3,4,7,8], groupSize = 3",
        output: "true",
      },
      {
        input: "hand = [1,2,3,4,5], groupSize = 4",
        output: "false",
      },
    ],
    constraints: [
      "1 ≤ hand.length ≤ 10⁴",
      "0 ≤ hand[i] ≤ 10⁹",
      "1 ≤ groupSize ≤ hand.length",
    ],
    starterCode: {
      javascript: `function isNStraightHand(hand, groupSize) {
  // Write your solution here

}

// Test cases
console.log(isNStraightHand([1,2,3,6,2,3,4,7,8], 3)); // Expected: true
console.log(isNStraightHand([1,2,3,4,5], 4)); // Expected: false`,
      python: `def isNStraightHand(hand, groupSize):
    # Write your solution here
    pass

# Test cases
print(isNStraightHand([1,2,3,6,2,3,4,7,8], 3))
print(isNStraightHand([1,2,3,4,5], 4))`,
      java: `import java.util.*;

class Solution {
    public static boolean isNStraightHand(int[] hand, int groupSize) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isNStraightHand(new int[]{1,2,3,6,2,3,4,7,8}, 3));
        System.out.println(isNStraightHand(new int[]{1,2,3,4,5}, 4));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

bool isNStraightHand(vector<int>& hand, int groupSize) {
    // Write your solution here
    return false;
}

int main() {
    vector<int> h1 = {1,2,3,6,2,3,4,7,8};
    vector<int> h2 = {1,2,3,4,5};

    cout << isNStraightHand(h1, 3) << endl;
    cout << isNStraightHand(h2, 4) << endl;
}`,
      csharp: `using System;

class Solution {
    public static bool IsNStraightHand(int[] hand, int groupSize) {
        // Write your solution here
        return false;
    }

    static void Main() {
        Console.WriteLine(IsNStraightHand(new int[]{1,2,3,6,2,3,4,7,8}, 3));
        Console.WriteLine(IsNStraightHand(new int[]{1,2,3,4,5}, 4));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for hand of straights

int main() {
    printf("Hand of Straights execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
      cpp: "1\n0",
      csharp: "True\nFalse",
      c: "Hand of Straights execution",
    },
  },
  "merge-triplets-to-form-target-triplet": {
    id: "merge-triplets-to-form-target-triplet",
    title: "Merge Triplets to Form Target Triplet",
    difficulty: "Medium",
    category: "Greedy • Array",
    description: {
      text: "A triplet is an array of three integers. You are given a list of triplets and a target triplet.",
      notes: [
        "You may perform the following operation any number of times:",
        "Choose two triplets and merge them into one by taking the element-wise maximum.",
        "Return true if it is possible to obtain the target triplet, otherwise return false.",
      ],
    },
    examples: [
      {
        input: "triplets = [[2,5,3],[1,8,4],[1,7,5]], target = [2,7,5]",
        output: "true",
      },
      {
        input: "triplets = [[3,4,5],[4,5,6]], target = [3,2,5]",
        output: "false",
      },
    ],
    constraints: [
      "1 ≤ triplets.length ≤ 10⁵",
      "triplets[i].length == 3",
      "1 ≤ triplets[i][j], target[j] ≤ 1000",
    ],
    starterCode: {
      javascript: `function mergeTriplets(triplets, target) {
  // Write your solution here

}

// Test cases
console.log(mergeTriplets([[2,5,3],[1,8,4],[1,7,5]], [2,7,5])); // Expected: true
console.log(mergeTriplets([[3,4,5],[4,5,6]], [3,2,5])); // Expected: false`,
      python: `def mergeTriplets(triplets, target):
    # Write your solution here
    pass

# Test cases
print(mergeTriplets([[2,5,3],[1,8,4],[1,7,5]], [2,7,5]))
print(mergeTriplets([[3,4,5],[4,5,6]], [3,2,5]))`,
      java: `class Solution {
    public static boolean mergeTriplets(int[][] triplets, int[] target) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(mergeTriplets(new int[][]{{2,5,3},{1,8,4},{1,7,5}}, new int[]{2,7,5}));
        System.out.println(mergeTriplets(new int[][]{{3,4,5},{4,5,6}}, new int[]{3,2,5}));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

bool mergeTriplets(vector<vector<int>>& triplets, vector<int>& target) {
    // Write your solution here
    return false;
}

int main() {
    vector<vector<int>> t1 = {{2,5,3},{1,8,4},{1,7,5}};
    vector<vector<int>> t2 = {{3,4,5},{4,5,6}};
    vector<int> target1 = {2,7,5};
    vector<int> target2 = {3,2,5};

    cout << mergeTriplets(t1, target1) << endl;
    cout << mergeTriplets(t2, target2) << endl;
}`,
      csharp: `using System;

class Solution {
    public static bool MergeTriplets(int[][] triplets, int[] target) {
        // Write your solution here
        return false;
    }

    static void Main() {
        Console.WriteLine(MergeTriplets(new int[][] {
            new int[]{2,5,3}, new int[]{1,8,4}, new int[]{1,7,5}
        }, new int[]{2,7,5}));

        Console.WriteLine(MergeTriplets(new int[][] {
            new int[]{3,4,5}, new int[]{4,5,6}
        }, new int[]{3,2,5}));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for merge triplets

int main() {
    printf("Merge Triplets execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
      cpp: "1\n0",
      csharp: "True\nFalse",
      c: "Merge Triplets execution",
    },
  },
  "partition-labels": {
    id: "partition-labels",
    title: "Partition Labels",
    difficulty: "Medium",
    category: "Greedy • String",
    description: {
      text: "You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.",
      notes: [
        "Return a list of integers representing the size of these parts.",
      ],
    },
    examples: [
      {
        input: 's = "ababcbacadefegdehijhklij"',
        output: "[9,7,8]",
      },
      {
        input: 's = "eccbbbbdec"',
        output: "[10]",
      },
    ],
    constraints: [
      "1 ≤ s.length ≤ 500",
      "s consists of lowercase English letters",
    ],
    starterCode: {
      javascript: `function partitionLabels(s) {
  // Write your solution here

}

// Test cases
console.log(partitionLabels("ababcbacadefegdehijhklij")); // Expected: [9,7,8]
console.log(partitionLabels("eccbbbbdec")); // Expected: [10]`,
      python: `def partitionLabels(s):
    # Write your solution here
    pass

# Test cases
print(partitionLabels("ababcbacadefegdehijhklij"))
print(partitionLabels("eccbbbbdec"))`,
      java: `import java.util.*;

class Solution {
    public static List<Integer> partitionLabels(String s) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(partitionLabels("ababcbacadefegdehijhklij"));
        System.out.println(partitionLabels("eccbbbbdec"));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> partitionLabels(string s) {
    // Write your solution here
    return {};
}

int main() {
    cout << "Partition Labels execution" << endl;
}`,
      csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static IList<int> PartitionLabels(string s) {
        // Write your solution here
        return new List<int>();
    }

    static void Main() {
        Console.WriteLine(string.Join(",", PartitionLabels("ababcbacadefegdehijhklij")));
        Console.WriteLine(string.Join(",", PartitionLabels("eccbbbbdec")));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for partition labels

int main() {
    printf("Partition Labels execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[9,7,8]\n[10]",
      python: "[9, 7, 8]\n[10]",
      java: "[9, 7, 8]\n[10]",
      cpp: "Partition Labels execution",
      csharp: "9,7,8\n10",
      c: "Partition Labels execution",
    },
  },
  "valid-parenthesis-string": {
    id: "valid-parenthesis-string",
    title: "Valid Parenthesis String",
    difficulty: "Medium",
    category: "Greedy • Stack • String",
    description: {
      text: "Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.",
      notes: [
        "'(' must have a corresponding ')'.",
        "')' must have a corresponding '('.",
        "'*' can be treated as '(', ')' or an empty string.",
        "An empty string is also valid.",
      ],
    },
    examples: [
      {
        input: 's = "()"',
        output: "true",
      },
      {
        input: 's = "(*)"',
        output: "true",
      },
      {
        input: 's = "(*))"',
        output: "true",
      },
    ],
    constraints: ["1 ≤ s.length ≤ 100", "s[i] is '(', ')' or '*'"],
    starterCode: {
      javascript: `function checkValidString(s) {
  // Write your solution here

}

// Test cases
console.log(checkValidString("()")); // Expected: true
console.log(checkValidString("(*)")); // Expected: true
console.log(checkValidString("(*))")); // Expected: true`,
      python: `def checkValidString(s):
    # Write your solution here
    pass

# Test cases
print(checkValidString("()"))
print(checkValidString("(*)"))
print(checkValidString("(*))"))`,
      java: `class Solution {
    public static boolean checkValidString(String s) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(checkValidString("()"));
        System.out.println(checkValidString("(*)"));
        System.out.println(checkValidString("(*))"));
    }
}`,
      cpp: `#include <iostream>
#include <string>
using namespace std;

bool checkValidString(string s) {
    // Write your solution here
    return false;
}

int main() {
    cout << checkValidString("()") << endl;
    cout << checkValidString("(*)") << endl;
    cout << checkValidString("(*))") << endl;
}`,
      csharp: `using System;

class Solution {
    public static bool CheckValidString(string s) {
        // Write your solution here
        return false;
    }

    static void Main() {
        Console.WriteLine(CheckValidString("()"));
        Console.WriteLine(CheckValidString("(*)"));
        Console.WriteLine(CheckValidString("(*))"));
    }
}`,
      c: `#include <stdio.h>

// Placeholder for valid parenthesis string

int main() {
    printf("Valid Parenthesis String execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\ntrue\ntrue",
      python: "True\nTrue\nTrue",
      java: "true\ntrue\ntrue",
      cpp: "1\n1\n1",
      csharp: "True\nTrue\nTrue",
      c: "Valid Parenthesis String execution",
    },
  },

  //Intervals
  "insert-interval": {
    id: "insert-interval",
    title: "Insert Interval",
    difficulty: "Medium",
    category: "Array • Sorting • Interval",
    description: {
      text: "You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval, and intervals is sorted in ascending order by starti.",
      notes: [
        "You are also given an interval newInterval = [start, end] that represents the start and end of another interval.",
        "Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).",
        "Return intervals after the insertion.",
      ],
    },
    examples: [
      {
        input: "intervals = [[1,3],[6,9]], newInterval = [2,5]",
        output: "[[1,5],[6,9]]",
      },
      {
        input:
          "intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]",
        output: "[[1,2],[3,10],[12,16]]",
      },
    ],
    constraints: [
      "0 ≤ intervals.length ≤ 10⁴",
      "intervals[i].length == 2",
      "0 ≤ starti ≤ endi ≤ 10⁵",
      "intervals is sorted by starti in ascending order",
      "newInterval.length == 2",
      "0 ≤ start ≤ end ≤ 10⁵",
    ],
    starterCode: {
      javascript: `function insert(intervals, newInterval) {
  // Write your solution here

}

// Test cases
console.log(insert([[1,3],[6,9]], [2,5])); // Expected: [[1,5],[6,9]]
console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])); // Expected: [[1,2],[3,10],[12,16]]`,
      python: `def insert(intervals, newInterval):
    # Write your solution here
    pass

# Test cases
print(insert([[1,3],[6,9]], [2,5]))
print(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]))`,
      java: `import java.util.*;

class Solution {
    public static int[][] insert(int[][] intervals, int[] newInterval) {
        // Write your solution here
        return new int[0][0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.deepToString(insert(new int[][]{{1,3},{6,9}}, new int[]{2,5})));
        System.out.println(Arrays.deepToString(insert(new int[][]{{1,2},{3,5},{6,7},{8,10},{12,16}}, new int[]{4,8})));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> insert(vector<vector<int>>& intervals, vector<int>& newInterval) {
    // Write your solution here
    return {};
}

int main() {
    vector<vector<int>> i1 = {{1,3},{6,9}};
    vector<int> n1 = {2,5};
    vector<vector<int>> i2 = {{1,2},{3,5},{6,7},{8,10},{12,16}};
    vector<int> n2 = {4,8};

    vector<vector<int>> r1 = insert(i1, n1);
    vector<vector<int>> r2 = insert(i2, n2);

    cout << "Insert Interval execution" << endl;
}`,
      csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static IList<IList<int>> Insert(IList<IList<int>> intervals, IList<int> newInterval) {
        // Write your solution here
        return new List<IList<int>>();
    }

    static void Main() {
        Console.WriteLine("Insert Interval execution");
    }
}`,
      c: `#include <stdio.h>

// Placeholder for insert interval

int main() {
    printf("Insert Interval execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[[1,5],[6,9]]\n[[1,2],[3,10],[12,16]]",
      python: "[[1,5],[6,9]]\n[[1,2],[3,10],[12,16]]",
      java: "[[1,5],[6,9]]\n[[1,2],[3,10],[12,16]]",
      cpp: "Insert Interval execution",
      csharp: "Insert Interval execution",
      c: "Insert Interval execution",
    },
  },
  "merge-intervals": {
    id: "merge-intervals",
    title: "Merge Intervals",
    difficulty: "Medium",
    category: "Array • Sorting • Interval",
    description: {
      text: "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
      notes: [
        "Intervals are considered overlapping if they share at least one common point.",
      ],
    },
    examples: [
      {
        input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        output: "[[1,6],[8,10],[15,18]]",
      },
      {
        input: "intervals = [[1,4],[4,5]]",
        output: "[[1,5]]",
      },
    ],
    constraints: [
      "1 ≤ intervals.length ≤ 10⁴",
      "intervals[i].length == 2",
      "0 ≤ starti ≤ endi ≤ 10⁵",
    ],
    starterCode: {
      javascript: `function merge(intervals) {
  // Write your solution here

}

// Test cases
console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // Expected: [[1,6],[8,10],[15,18]]
console.log(merge([[1,4],[4,5]])); // Expected: [[1,5]]`,
      python: `def merge(intervals):
    # Write your solution here
    pass

# Test cases
print(merge([[1,3],[2,6],[8,10],[15,18]]))
print(merge([[1,4],[4,5]]))`,
      java: `import java.util.*;

class Solution {
    public static int[][] merge(int[][] intervals) {
        // Write your solution here
        return new int[0][0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.deepToString(merge(new int[][]{{1,3},{2,6},{8,10},{15,18}})));
        System.out.println(Arrays.deepToString(merge(new int[][]{{1,4},{4,5}})));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> merge(vector<vector<int>>& intervals) {
    // Write your solution here
    return {};
}

int main() {
    cout << "Merge Intervals execution" << endl;
}`,
      csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static IList<IList<int>> Merge(IList<IList<int>> intervals) {
        // Write your solution here
        return new List<IList<int>>();
    }

    static void Main() {
        Console.WriteLine("Merge Intervals execution");
    }
}`,
      c: `#include <stdio.h>

// Placeholder for merge intervals

int main() {
    printf("Merge Intervals execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[[1,6],[8,10],[15,18]]\n[[1,5]]",
      python: "[[1,6],[8,10],[15,18]]\n[[1,5]]",
      java: "[[1,6],[8,10],[15,18]]\n[[1,5]]",
      cpp: "Merge Intervals execution",
      csharp: "Merge Intervals execution",
      c: "Merge Intervals execution",
    },
  },
  "non-overlapping-intervals": {
    id: "non-overlapping-intervals",
    title: "Non-Overlapping Intervals",
    difficulty: "Medium",
    category: "Greedy • Interval",
    description: {
      text: "Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.",
      notes: [
        "Intervals are considered overlapping if they share at least one common point.",
      ],
    },
    examples: [
      {
        input: "intervals = [[1,2],[2,3],[3,4],[1,3]]",
        output: "1",
      },
      {
        input: "intervals = [[1,2],[1,2],[1,2]]",
        output: "2",
      },
      {
        input: "intervals = [[1,2],[2,3]]",
        output: "0",
      },
    ],
    constraints: [
      "1 ≤ intervals.length ≤ 10⁵",
      "intervals[i].length == 2",
      "-5 * 10⁴ ≤ starti < endi ≤ 5 * 10⁴",
    ],
    starterCode: {
      javascript: `function eraseOverlapIntervals(intervals) {
  // Write your solution here

}

// Test cases
console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])); // Expected: 1
console.log(eraseOverlapIntervals([[1,2],[1,2],[1,2]])); // Expected: 2
console.log(eraseOverlapIntervals([[1,2],[2,3]])); // Expected: 0`,
      python: `def eraseOverlapIntervals(intervals):
    # Write your solution here
    pass

# Test cases
print(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]))
print(eraseOverlapIntervals([[1,2],[1,2],[1,2]]))
print(eraseOverlapIntervals([[1,2],[2,3]]))`,
      java: `import java.util.*;

class Solution {
    public static int eraseOverlapIntervals(int[][] intervals) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(eraseOverlapIntervals(new int[][]{{1,2},{2,3},{3,4},{1,3}}));
        System.out.println(eraseOverlapIntervals(new int[][]{{1,2},{1,2},{1,2}}));
        System.out.println(eraseOverlapIntervals(new int[][]{{1,2},{2,3}}));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int eraseOverlapIntervals(vector<vector<int>>& intervals) {
    // Write your solution here
    return 0;
}

int main() {
    cout << "Non-Overlapping Intervals execution" << endl;
}`,
      csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static int EraseOverlapIntervals(int[][] intervals) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine("Non-Overlapping Intervals execution");
    }
}`,
      c: `#include <stdio.h>

// Placeholder for non-overlapping intervals

int main() {
    printf("Non-Overlapping Intervals execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "1\n2\n0",
      python: "1\n2\n0",
      java: "1\n2\n0",
      cpp: "Non-Overlapping Intervals execution",
      csharp: "Non-Overlapping Intervals execution",
      c: "Non-Overlapping Intervals execution",
    },
  },
  "meeting-rooms": {
    id: "meeting-rooms",
    title: "Meeting Rooms",
    difficulty: "Easy",
    category: "Array • Sorting • Interval",
    description: {
      text: "Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.",
      notes: [
        "Return true if none of the intervals overlap, otherwise return false.",
      ],
    },
    examples: [
      {
        input: "intervals = [[0,30],[5,10],[15,20]]",
        output: "false",
      },
      {
        input: "intervals = [[7,10],[2,4]]",
        output: "true",
      },
    ],
    constraints: [
      "0 ≤ intervals.length ≤ 10⁴",
      "intervals[i].length == 2",
      "0 ≤ starti < endi ≤ 10⁶",
    ],
    starterCode: {
      javascript: `function canAttendMeetings(intervals) {
  // Write your solution here

}

// Test cases
console.log(canAttendMeetings([[0,30],[5,10],[15,20]])); // Expected: false
console.log(canAttendMeetings([[7,10],[2,4]])); // Expected: true`,
      python: `def canAttendMeetings(intervals):
    # Write your solution here
    pass

# Test cases
print(canAttendMeetings([[0,30],[5,10],[15,20]]))
print(canAttendMeetings([[7,10],[2,4]]))`,
      java: `import java.util.*;

class Solution {
    public static boolean canAttendMeetings(int[][] intervals) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(canAttendMeetings(new int[][]{{0,30},{5,10},{15,20}}));
        System.out.println(canAttendMeetings(new int[][]{{7,10},{2,4}}));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

bool canAttendMeetings(vector<vector<int>>& intervals) {
    // Write your solution here
    return false;
}

int main() {
    cout << "Meeting Rooms execution" << endl;
}`,
      csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static bool CanAttendMeetings(int[][] intervals) {
        // Write your solution here
        return false;
    }

    static void Main() {
        Console.WriteLine("Meeting Rooms execution");
    }
}`,
      c: `#include <stdio.h>

// Placeholder for meeting rooms

int main() {
    printf("Meeting Rooms execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "false\ntrue",
      python: "False\nTrue",
      java: "false\ntrue",
      cpp: "Meeting Rooms execution",
      csharp: "Meeting Rooms execution",
      c: "Meeting Rooms execution",
    },
  },
  "meeting-rooms-ii": {
    id: "meeting-rooms-ii",
    title: "Meeting Rooms II",
    difficulty: "Medium",
    category: "Heap • Interval • Greedy",
    description: {
      text: "Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.",
      notes: [
        "Each meeting occupies a room during its time interval.",
        "Find the minimum number of rooms to hold all meetings without overlaps.",
      ],
    },
    examples: [
      {
        input: "intervals = [[0,30],[5,10],[15,20]]",
        output: "2",
      },
      {
        input: "intervals = [[7,10],[2,4]]",
        output: "1",
      },
    ],
    constraints: [
      "0 ≤ intervals.length ≤ 10⁴",
      "intervals[i].length == 2",
      "0 ≤ starti < endi ≤ 10⁶",
    ],
    starterCode: {
      javascript: `function minMeetingRooms(intervals) {
  // Write your solution here

}

// Test cases
console.log(minMeetingRooms([[0,30],[5,10],[15,20]])); // Expected: 2
console.log(minMeetingRooms([[7,10],[2,4]])); // Expected: 1`,
      python: `def minMeetingRooms(intervals):
    # Write your solution here
    pass

# Test cases
print(minMeetingRooms([[0,30],[5,10],[15,20]]))
print(minMeetingRooms([[7,10],[2,4]]))`,
      java: `import java.util.*;

class Solution {
    public static int minMeetingRooms(int[][] intervals) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(minMeetingRooms(new int[][]{{0,30},{5,10},{15,20}}));
        System.out.println(minMeetingRooms(new int[][]{{7,10},{2,4}}));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int minMeetingRooms(vector<vector<int>>& intervals) {
    // Write your solution here
    return 0;
}

int main() {
    cout << "Meeting Rooms II execution" << endl;
}`,
      csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static int MinMeetingRooms(int[][] intervals) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine("Meeting Rooms II execution");
    }
}`,
      c: `#include <stdio.h>

// Placeholder for meeting rooms II

int main() {
    printf("Meeting Rooms II execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "2\n1",
      python: "2\n1",
      java: "2\n1",
      cpp: "Meeting Rooms II execution",
      csharp: "Meeting Rooms II execution",
      c: "Meeting Rooms II execution",
    },
  },
  "minimum-interval-to-include-each-query": {
    id: "minimum-interval-to-include-each-query",
    title: "Minimum Interval to Include Each Query",
    difficulty: "Hard",
    category: "Heap • Sorting • Binary Search",
    description: {
      text: "You are given a 2D integer array intervals where intervals[i] = [lefti, righti] describes the ith interval. You are also given an integer array queries.",
      notes: [
        "The interval [a, b] includes an integer x if a ≤ x ≤ b.",
        "Return an array answer where answer[i] is the size of the smallest interval that includes queries[i].",
        "If no interval includes queries[i], set answer[i] = -1.",
      ],
    },
    examples: [
      {
        input: "intervals = [[1,4],[2,4],[3,6]], queries = [2,3,4,5]",
        output: "[3,3,3,4]",
      },
      {
        input: "intervals = [[2,3],[2,5],[1,8],[20,25]], queries = [2,19,5,22]",
        output: "[2,-1,4,6]",
      },
    ],
    constraints: [
      "1 ≤ intervals.length ≤ 10⁵",
      "1 ≤ queries.length ≤ 10⁵",
      "intervals[i].length == 2",
      "1 ≤ lefti ≤ righti ≤ 10⁷",
      "1 ≤ queries[i] ≤ 10⁷",
    ],
    starterCode: {
      javascript: `function minInterval(intervals, queries) {
  // Write your solution here

}

// Test cases
console.log(minInterval([[1,4],[2,4],[3,6]], [2,3,4,5])); // Expected: [3,3,3,4]
console.log(minInterval([[2,3],[2,5],[1,8],[20,25]], [2,19,5,22])); // Expected: [2,-1,4,6]`,
      python: `def minInterval(intervals, queries):
    # Write your solution here
    pass

# Test cases
print(minInterval([[1,4],[2,4],[3,6]], [2,3,4,5]))
print(minInterval([[2,3],[2,5],[1,8],[20,25]], [2,19,5,22]))`,
      java: `import java.util.*;

class Solution {
    public static int[] minInterval(int[][] intervals, int[] queries) {
        // Write your solution here
        return new int[queries.length];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(minInterval(new int[][]{{1,4},{2,4},{3,6}}, new int[]{2,3,4,5})));
        System.out.println(Arrays.toString(minInterval(new int[][]{{2,3},{2,5},{1,8},{20,25}}, new int[]{2,19,5,22})));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> minInterval(vector<vector<int>>& intervals, vector<int>& queries) {
    // Write your solution here
    return {};
}

int main() {
    cout << "Minimum Interval execution" << endl;
}`,
      csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static int[] MinInterval(int[][] intervals, int[] queries) {
        // Write your solution here
        return new int[queries.Length];
    }

    static void Main() {
        Console.WriteLine("Minimum Interval execution");
    }
}`,
      c: `#include <stdio.h>

// Placeholder for minimum interval to include queries

int main() {
    printf("Minimum Interval execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[3,3,3,4]\n[2,-1,4,6]",
      python: "[3, 3, 3, 4]\n[2, -1, 4, 6]",
      java: "[3, 3, 3, 4]\n[2, -1, 4, 6]",
      cpp: "Minimum Interval execution",
      csharp: "Minimum Interval execution",
      c: "Minimum Interval execution",
    },
  },

  //Math and Geometry
  "rotate-image": {
    id: "rotate-image",
    title: "Rotate Image",
    difficulty: "Medium",
    category: "Array • Matrix • In-place",
    description: {
      text: "You are given an n x n 2D matrix representing an image. Rotate the image by 90 degrees (clockwise) in-place.",
      notes: [
        "You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.",
        "Do not allocate another 2D matrix for the rotation.",
      ],
    },
    examples: [
      {
        input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
        output: "[[7,4,1],[8,5,2],[9,6,3]]",
      },
      {
        input: "matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]",
        output: "[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]",
      },
    ],
    constraints: [
      "matrix.length == n",
      "matrix[i].length == n",
      "1 ≤ n ≤ 20",
      "-1000 ≤ matrix[i][j] ≤ 1000",
    ],
    starterCode: {
      javascript: `function rotate(matrix) {
  // Write your solution here

}

// Test cases
let m1 = [[1,2,3],[4,5,6],[7,8,9]];
rotate(m1);
console.log(m1); // Expected: [[7,4,1],[8,5,2],[9,6,3]]

let m2 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
rotate(m2);
console.log(m2); // Expected: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]`,
      python: `def rotate(matrix):
    # Write your solution here
    pass

# Test cases
m1 = [[1,2,3],[4,5,6],[7,8,9]]
rotate(m1)
print(m1)

m2 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
rotate(m2)
print(m2)`,
      java: `class Solution {
    public static void rotate(int[][] matrix) {
        // Write your solution here
    }

    public static void main(String[] args) {
        int[][] m1 = {{1,2,3},{4,5,6},{7,8,9}};
        rotate(m1);
        System.out.println(Arrays.deepToString(m1));

        int[][] m2 = {{5,1,9,11},{2,4,8,10},{13,3,6,7},{15,14,12,16}};
        rotate(m2);
        System.out.println(Arrays.deepToString(m2));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void rotate(vector<vector<int>>& matrix) {
    // Write your solution here
}

int main() {
    cout << "Rotate Image execution" << endl;
}`,
      csharp: `using System;

class Solution {
    public static void Rotate(int[][] matrix) {
        // Write your solution here
    }

    static void Main() {
        Console.WriteLine("Rotate Image execution");
    }
}`,
      c: `#include <stdio.h>

// Placeholder for rotate image

int main() {
    printf("Rotate Image execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript:
        "[[7,4,1],[8,5,2],[9,6,3]]\n[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]",
      python:
        "[[7, 4, 1], [8, 5, 2], [9, 6, 3]]\n[[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]",
      java: "[[7, 4, 1], [8, 5, 2], [9, 6, 3]]\n[[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]",
      cpp: "Rotate Image execution",
      csharp: "Rotate Image execution",
      c: "Rotate Image execution",
    },
  },
  "spiral-matrix": {
    id: "spiral-matrix",
    title: "Spiral Matrix",
    difficulty: "Medium",
    category: "Array • Matrix • Simulation",
    description: {
      text: "Given an m x n matrix, return all elements of the matrix in spiral order.",
      notes: [
        "Traverse the matrix clockwise starting from the top-left corner.",
      ],
    },
    examples: [
      {
        input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
        output: "[1,2,3,6,9,8,7,4,5]",
      },
      {
        input: "matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]",
        output: "[1,2,3,4,8,12,11,10,9,5,6,7]",
      },
    ],
    constraints: [
      "m == matrix.length",
      "n == matrix[i].length",
      "1 ≤ m, n ≤ 10",
      "-100 ≤ matrix[i][j] ≤ 100",
    ],
    starterCode: {
      javascript: `function spiralOrder(matrix) {
  // Write your solution here

}

// Test cases
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])); // Expected: [1,2,3,6,9,8,7,4,5]
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])); // Expected: [1,2,3,4,8,12,11,10,9,5,6,7]`,
      python: `def spiralOrder(matrix):
    # Write your solution here
    pass

# Test cases
print(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
print(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))`,
      java: `import java.util.*;

class Solution {
    public static List<Integer> spiralOrder(int[][] matrix) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(spiralOrder(new int[][]{{1,2,3},{4,5,6},{7,8,9}}));
        System.out.println(spiralOrder(new int[][]{{1,2,3,4},{5,6,7,8},{9,10,11,12}}));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> spiralOrder(vector<vector<int>>& matrix) {
    // Write your solution here
    return {};
}

int main() {
    cout << "Spiral Matrix execution" << endl;
}`,
      csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static IList<int> SpiralOrder(int[][] matrix) {
        // Write your solution here
        return new List<int>();
    }

    static void Main() {
        Console.WriteLine("Spiral Matrix execution");
    }
}`,
      c: `#include <stdio.h>

// Placeholder for spiral matrix

int main() {
    printf("Spiral Matrix execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[1,2,3,6,9,8,7,4,5]\n[1,2,3,4,8,12,11,10,9,5,6,7]",
      python:
        "[1, 2, 3, 6, 9, 8, 7, 4, 5]\n[1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]",
      java: "[1, 2, 3, 6, 9, 8, 7, 4, 5]\n[1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]",
      cpp: "Spiral Matrix execution",
      csharp: "Spiral Matrix execution",
      c: "Spiral Matrix execution",
    },
  },
  "set-matrix-zeroes": {
    id: "set-matrix-zeroes",
    title: "Set Matrix Zeroes",
    difficulty: "Medium",
    category: "Array • Matrix • In-place",
    description: {
      text: "Given an m x n integer matrix, if an element is 0, set its entire row and column to 0's in-place.",
      notes: [
        "You must do it in-place.",
        "Try to optimize space usage by not using extra matrices if possible.",
      ],
    },
    examples: [
      {
        input: "matrix = [[1,1,1],[1,0,1],[1,1,1]]",
        output: "[[1,0,1],[0,0,0],[1,0,1]]",
      },
      {
        input: "matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]",
        output: "[[0,0,0,0],[0,4,5,0],[0,3,1,0]]",
      },
    ],
    constraints: [
      "m == matrix.length",
      "n == matrix[0].length",
      "1 ≤ m, n ≤ 200",
      "-2³¹ ≤ matrix[i][j] ≤ 2³¹ - 1",
    ],
    starterCode: {
      javascript: `function setZeroes(matrix) {
  // Write your solution here

}

// Test cases
let mat1 = [[1,1,1],[1,0,1],[1,1,1]];
setZeroes(mat1);
console.log(mat1); // Expected: [[1,0,1],[0,0,0],[1,0,1]]

let mat2 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
setZeroes(mat2);
console.log(mat2); // Expected: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]`,
      python: `def setZeroes(matrix):
    # Write your solution here
    pass

# Test cases
mat1 = [[1,1,1],[1,0,1],[1,1,1]]
setZeroes(mat1)
print(mat1)

mat2 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
setZeroes(mat2)
print(mat2)`,
      java: `class Solution {
    public static void setZeroes(int[][] matrix) {
        // Write your solution here
    }

    public static void main(String[] args) {
        int[][] mat1 = {{1,1,1},{1,0,1},{1,1,1}};
        setZeroes(mat1);
        System.out.println(Arrays.deepToString(mat1));

        int[][] mat2 = {{0,1,2,0},{3,4,5,2},{1,3,1,5}};
        setZeroes(mat2);
        System.out.println(Arrays.deepToString(mat2));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void setZeroes(vector<vector<int>>& matrix) {
    // Write your solution here
}

int main() {
    cout << "Set Matrix Zeroes execution" << endl;
}`,
      csharp: `using System;

class Solution {
    public static void SetZeroes(int[][] matrix) {
        // Write your solution here
    }

    static void Main() {
        Console.WriteLine("Set Matrix Zeroes execution");
    }
}`,
      c: `#include <stdio.h>

// Placeholder for set matrix zeroes

int main() {
    printf("Set Matrix Zeroes execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[[1,0,1],[0,0,0],[1,0,1]]\n[[0,0,0,0],[0,4,5,0],[0,3,1,0]]",
      python:
        "[[1, 0, 1], [0, 0, 0], [1, 0, 1]]\n[[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]",
      java: "[[1, 0, 1], [0, 0, 0], [1, 0, 1]]\n[[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]",
      cpp: "Set Matrix Zeroes execution",
      csharp: "Set Matrix Zeroes execution",
      c: "Set Matrix Zeroes execution",
    },
  },
  "happy-number": {
    id: "happy-number",
    title: "Happy Number",
    difficulty: "Easy",
    category: "Math • Hash Table • Two Pointers",
    description: {
      text: "Write an algorithm to determine if a number n is happy.",
      notes: [
        "A happy number is a number defined by the following process:",
        "Starting with any positive integer, replace the number by the sum of the squares of its digits.",
        "Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle that does not include 1.",
        "Return true if n is a happy number, otherwise return false.",
      ],
    },
    examples: [
      {
        input: "n = 19",
        output: "true",
      },
      {
        input: "n = 2",
        output: "false",
      },
    ],
    constraints: ["1 ≤ n ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function isHappy(n) {
  // Write your solution here

}

// Test cases
console.log(isHappy(19)); // Expected: true
console.log(isHappy(2)); // Expected: false`,
      python: `def isHappy(n):
    # Write your solution here
    pass

# Test cases
print(isHappy(19))
print(isHappy(2))`,
      java: `class Solution {
    public static boolean isHappy(int n) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isHappy(19));
        System.out.println(isHappy(2));
    }
}`,
      cpp: `#include <iostream>
using namespace std;

bool isHappy(int n) {
    // Write your solution here
    return false;
}

int main() {
    cout << "Happy Number execution" << endl;
}`,
      csharp: `using System;

class Solution {
    public static bool IsHappy(int n) {
        // Write your solution here
        return false;
    }

    static void Main() {
        Console.WriteLine("Happy Number execution");
    }
}`,
      c: `#include <stdio.h>

// Placeholder for happy number

int main() {
    printf("Happy Number execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
      cpp: "Happy Number execution",
      csharp: "Happy Number execution",
      c: "Happy Number execution",
    },
  },
  "plus-one": {
    id: "plus-one",
    title: "Plus One",
    difficulty: "Easy",
    category: "Array • Math",
    description: {
      text: "You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.",
      notes: [
        "Increment the integer by one and return the resulting array of digits.",
      ],
    },
    examples: [
      {
        input: "digits = [1,2,3]",
        output: "[1,2,4]",
      },
      {
        input: "digits = [4,3,2,1]",
        output: "[4,3,2,2]",
      },
      {
        input: "digits = [9]",
        output: "[1,0]",
      },
    ],
    constraints: [
      "1 ≤ digits.length ≤ 100",
      "0 ≤ digits[i] ≤ 9",
      "digits does not contain leading zeros except for the number 0 itself",
    ],
    starterCode: {
      javascript: `function plusOne(digits) {
  // Write your solution here

}

// Test cases
console.log(plusOne([1,2,3])); // Expected: [1,2,4]
console.log(plusOne([4,3,2,1])); // Expected: [4,3,2,2]
console.log(plusOne([9])); // Expected: [1,0]`,
      python: `def plusOne(digits):
    # Write your solution here
    pass

# Test cases
print(plusOne([1,2,3]))
print(plusOne([4,3,2,1]))
print(plusOne([9]))`,
      java: `import java.util.*;

class Solution {
    public static int[] plusOne(int[] digits) {
        // Write your solution here
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(plusOne(new int[]{1,2,3})));
        System.out.println(Arrays.toString(plusOne(new int[]{4,3,2,1})));
        System.out.println(Arrays.toString(plusOne(new int[]{9})));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> plusOne(vector<int>& digits) {
    // Write your solution here
    return {};
}

int main() {
    cout << "Plus One execution" << endl;
}`,
      csharp: `using System;

class Solution {
    public static int[] PlusOne(int[] digits) {
        // Write your solution here
        return new int[0];
    }

    static void Main() {
        Console.WriteLine("Plus One execution");
    }
}`,
      c: `#include <stdio.h>

// Placeholder for plus one

int main() {
    printf("Plus One execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[1,2,4]\n[4,3,2,2]\n[1,0]",
      python: "[1, 2, 4]\n[4, 3, 2, 2]\n[1, 0]",
      java: "[1, 2, 4]\n[4, 3, 2, 2]\n[1, 0]",
      cpp: "Plus One execution",
      csharp: "Plus One execution",
      c: "Plus One execution",
    },
  },
  "pow-x-n": {
    id: "pow-x-n",
    title: "Pow(x, n)",
    difficulty: "Medium",
    category: "Math • Recursion • Binary Exponentiation",
    description: {
      text: "Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).",
      notes: [
        "You must implement the function efficiently (logarithmic time complexity).",
      ],
    },
    examples: [
      {
        input: "x = 2.00000, n = 10",
        output: "1024.00000",
      },
      {
        input: "x = 2.10000, n = 3",
        output: "9.26100",
      },
      {
        input: "x = 2.00000, n = -2",
        output: "0.25000",
      },
    ],
    constraints: [
      "-100.0 < x < 100.0",
      "-2³¹ ≤ n ≤ 2³¹ - 1",
      "-10⁴ ≤ x^n ≤ 10⁴",
    ],
    starterCode: {
      javascript: `function myPow(x, n) {
  // Write your solution here

}

// Test cases
console.log(myPow(2.0, 10)); // Expected: 1024.0
console.log(myPow(2.1, 3)); // Expected: 9.261
console.log(myPow(2.0, -2)); // Expected: 0.25`,
      python: `def myPow(x, n):
    # Write your solution here
    pass

# Test cases
print(myPow(2.0, 10))
print(myPow(2.1, 3))
print(myPow(2.0, -2))`,
      java: `class Solution {
    public static double myPow(double x, int n) {
        // Write your solution here
        return 0.0;
    }

    public static void main(String[] args) {
        System.out.println(myPow(2.0, 10));
        System.out.println(myPow(2.1, 3));
        System.out.println(myPow(2.0, -2));
    }
}`,
      cpp: `#include <iostream>
using namespace std;

double myPow(double x, int n) {
    // Write your solution here
    return 0.0;
}

int main() {
    cout << "Pow(x, n) execution" << endl;
}`,
      csharp: `using System;

class Solution {
    public static double MyPow(double x, int n) {
        // Write your solution here
        return 0.0;
    }

    static void Main() {
        Console.WriteLine("Pow(x, n) execution");
    }
}`,
      c: `#include <stdio.h>

// Placeholder for pow(x, n)

int main() {
    printf("Pow(x, n) execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "1024\n9.261\n0.25",
      python: "1024\n9.261\n0.25",
      java: "1024\n9.261\n0.25",
      cpp: "Pow(x, n) execution",
      csharp: "Pow(x, n) execution",
      c: "Pow(x, n) execution",
    },
  },
  "multiply-strings": {
    id: "multiply-strings",
    title: "Multiply Strings",
    difficulty: "Medium",
    category: "Math • String",
    description: {
      text: "Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also as a string.",
      notes: [
        "You must not use any built-in BigInteger library or convert the inputs to integer directly.",
      ],
    },
    examples: [
      {
        input: 'num1 = "2", num2 = "3"',
        output: '"6"',
      },
      {
        input: 'num1 = "123", num2 = "456"',
        output: '"56088"',
      },
    ],
    constraints: [
      "1 ≤ num1.length, num2.length ≤ 200",
      "num1 and num2 consist of digits only",
      "Both num1 and num2 do not contain any leading zeros, except the number 0 itself",
    ],
    starterCode: {
      javascript: `function multiply(num1, num2) {
  // Write your solution here

}

// Test cases
console.log(multiply("2", "3")); // Expected: "6"
console.log(multiply("123", "456")); // Expected: "56088"`,
      python: `def multiply(num1, num2):
    # Write your solution here
    pass

# Test cases
print(multiply("2", "3"))
print(multiply("123", "456"))`,
      java: `class Solution {
    public static String multiply(String num1, String num2) {
        // Write your solution here
        return "";
    }

    public static void main(String[] args) {
        System.out.println(multiply("2", "3"));
        System.out.println(multiply("123", "456"));
    }
}`,
      cpp: `#include <iostream>
#include <string>
using namespace std;

string multiply(string num1, string num2) {
    // Write your solution here
    return "";
}

int main() {
    cout << "Multiply Strings execution" << endl;
}`,
      csharp: `using System;

class Solution {
    public static string Multiply(string num1, string num2) {
        // Write your solution here
        return "";
    }

    static void Main() {
        Console.WriteLine("Multiply Strings execution");
    }
}`,
      c: `#include <stdio.h>

// Placeholder for multiply strings

int main() {
    printf("Multiply Strings execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: '"6"\n"56088"',
      python: '"6"\n"56088"',
      java: '"6"\n"56088"',
      cpp: "Multiply Strings execution",
      csharp: "Multiply Strings execution",
      c: "Multiply Strings execution",
    },
  },
  "detect-squares": {
    id: "detect-squares",
    title: "Detect Squares",
    difficulty: "Medium",
    category: "Hash Table • Geometry • Design",
    description: {
      text: "Design a data structure that can add points in a 2D plane and count the number of axis-aligned squares formed with a given query point.",
      notes: [
        "Points can be repeated in the add operations.",
        "A square is axis-aligned if its sides are parallel to the x and y axes.",
      ],
    },
    examples: [
      {
        input:
          '["DetectSquares","add","add","add","count","count","add","count"]\n[[],[3,10],[11,2],[3,2],[11,10],[14,8],[11,2],[11,10]]',
        output: "[null,null,null,null,1,0,null,2]",
      },
    ],
    constraints: [
      "0 ≤ x, y ≤ 1000",
      "At most 5000 calls will be made to add and count",
    ],
    starterCode: {
      javascript: `class DetectSquares {
  constructor() {
    // Initialize your data structure
  }

  add(point) {
    // Add a point [x, y] to the data structure
  }

  count(point) {
    // Count the number of squares with point [x, y] as one corner
  }
}

// Test case example
let ds = new DetectSquares();
ds.add([3,10]);
ds.add([11,2]);
ds.add([3,2]);
console.log(ds.count([11,10])); // Expected: 1
console.log(ds.count([14,8]));  // Expected: 0
ds.add([11,2]);
console.log(ds.count([11,10])); // Expected: 2`,
      python: `class DetectSquares:
    def __init__(self):
        # Initialize your data structure
        pass

    def add(self, point):
        # Add a point [x, y]
        pass

    def count(self, point):
        # Count squares with [x, y] as one corner
        pass

# Test case example
ds = DetectSquares()
ds.add([3,10])
ds.add([11,2])
ds.add([3,2])
print(ds.count([11,10])) # Expected: 1
print(ds.count([14,8]))  # Expected: 0
ds.add([11,2])
print(ds.count([11,10])) # Expected: 2`,
      java: `import java.util.*;

class DetectSquares {
    public DetectSquares() {
        // Initialize your data structure
    }

    public void add(int[] point) {
        // Add point [x, y]
    }

    public int count(int[] point) {
        // Count squares with point [x, y] as one corner
        return 0;
    }

    public static void main(String[] args) {
        DetectSquares ds = new DetectSquares();
        ds.add(new int[]{3,10});
        ds.add(new int[]{11,2});
        ds.add(new int[]{3,2});
        System.out.println(ds.count(new int[]{11,10})); // Expected: 1
        System.out.println(ds.count(new int[]{14,8}));  // Expected: 0
        ds.add(new int[]{11,2});
        System.out.println(ds.count(new int[]{11,10})); // Expected: 2
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

class DetectSquares {
public:
    DetectSquares() {
        // Initialize your data structure
    }

    void add(vector<int> point) {
        // Add a point [x, y]
    }

    int count(vector<int> point) {
        // Count squares with point [x, y] as one corner
        return 0;
    }
};

int main() {
    cout << "Detect Squares execution" << endl;
}`,
      csharp: `using System;

class DetectSquares {
    public DetectSquares() {
        // Initialize your data structure
    }

    public void Add(int[] point) {
        // Add point [x, y]
    }

    public int Count(int[] point) {
        // Count squares with point [x, y] as one corner
        return 0;
    }

    static void Main() {
        Console.WriteLine("Detect Squares execution");
    }
}`,
      c: `#include <stdio.h>

// Placeholder for Detect Squares

int main() {
    printf("Detect Squares execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "null\nnull\nnull\n1\n0\nnull\n2",
      python: "None\nNone\nNone\n1\n0\nNone\n2",
      java: "null\nnull\nnull\n1\n0\nnull\n2",
      cpp: "Detect Squares execution",
      csharp: "Detect Squares execution",
      c: "Detect Squares execution",
    },
  },

  //Bit Manipulation
  "single-number": {
    id: "single-number",
    title: "Single Number",
    difficulty: "Easy",
    category: "Array • Bit Manipulation",
    description: {
      text: "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.",
      notes: [
        "Your algorithm should have a linear runtime complexity and use only constant extra space.",
      ],
    },
    examples: [
      {
        input: "nums = [2,2,1]",
        output: "1",
      },
      {
        input: "nums = [4,1,2,1,2]",
        output: "4",
      },
      {
        input: "nums = [1]",
        output: "1",
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 3 * 10⁴",
      "-3 * 10⁴ ≤ nums[i] ≤ 3 * 10⁴",
      "Each element appears twice except for one.",
    ],
    starterCode: {
      javascript: `function singleNumber(nums) {
  // Write your solution here

}

// Test cases
console.log(singleNumber([2,2,1])); // Expected: 1
console.log(singleNumber([4,1,2,1,2])); // Expected: 4
console.log(singleNumber([1])); // Expected: 1`,
      python: `def singleNumber(nums):
    # Write your solution here
    pass

# Test cases
print(singleNumber([2,2,1]))
print(singleNumber([4,1,2,1,2]))
print(singleNumber([1]))`,
      java: `class Solution {
    public static int singleNumber(int[] nums) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(singleNumber(new int[]{2,2,1}));
        System.out.println(singleNumber(new int[]{4,1,2,1,2}));
        System.out.println(singleNumber(new int[]{1}));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int singleNumber(vector<int>& nums) {
    // Write your solution here
    return 0;
}

int main() {
    cout << "Single Number execution" << endl;
}`,
      csharp: `using System;

class Solution {
    public static int SingleNumber(int[] nums) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine("Single Number execution");
    }
}`,
      c: `#include <stdio.h>

// Placeholder for single number

int main() {
    printf("Single Number execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "1\n4\n1",
      python: "1\n4\n1",
      java: "1\n4\n1",
      cpp: "Single Number execution",
      csharp: "Single Number execution",
      c: "Single Number execution",
    },
  },
  "number-of-1-bits": {
    id: "number-of-1-bits",
    title: "Number of 1 Bits",
    difficulty: "Easy",
    category: "Bit Manipulation",
    description: {
      text: "Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).",
      notes: ["The input must be treated as an unsigned value."],
    },
    examples: [
      {
        input: "n = 11",
        output: "3",
        explanation: "Binary representation: 00000000000000000000000000001011",
      },
      {
        input: "n = 128",
        output: "1",
        explanation: "Binary representation: 00000000000000000000000010000000",
      },
    ],
    constraints: ["The input is a 32-bit unsigned integer."],
    starterCode: {
      javascript: `function hammingWeight(n) {
  // Write your solution here

}

// Test cases
console.log(hammingWeight(11)); // Expected: 3
console.log(hammingWeight(128)); // Expected: 1`,
      python: `def hammingWeight(n):
    # Write your solution here
    pass

# Test cases
print(hammingWeight(11))
print(hammingWeight(128))`,
      java: `class Solution {
    public static int hammingWeight(int n) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(hammingWeight(11));
        System.out.println(hammingWeight(128));
    }
}`,
      cpp: `#include <iostream>
using namespace std;

int hammingWeight(uint32_t n) {
    // Write your solution here
    return 0;
}

int main() {
    cout << "Number of 1 Bits execution" << endl;
}`,
      csharp: `using System;

class Solution {
    public static int HammingWeight(uint n) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine("Number of 1 Bits execution");
    }
}`,
      c: `#include <stdio.h>
#include <stdint.h>

// Placeholder for number of 1 bits

int main() {
    printf("Number of 1 Bits execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "3\n1",
      python: "3\n1",
      java: "3\n1",
      cpp: "Number of 1 Bits execution",
      csharp: "Number of 1 Bits execution",
      c: "Number of 1 Bits execution",
    },
  },
  "counting-bits": {
    id: "counting-bits",
    title: "Counting Bits",
    difficulty: "Easy",
    category: "Dynamic Programming • Bit Manipulation",
    description: {
      text: "Given an integer n, return an array ans of length n + 1 such that for each i (0 ≤ i ≤ n), ans[i] is the number of 1's in the binary representation of i.",
      notes: [
        "Try to solve it in linear time O(n) without using built-in functions.",
      ],
    },
    examples: [
      {
        input: "n = 2",
        output: "[0,1,1]",
      },
      {
        input: "n = 5",
        output: "[0,1,1,2,1,2]",
      },
    ],
    constraints: ["0 ≤ n ≤ 10⁵"],
    starterCode: {
      javascript: `function countBits(n) {
  // Write your solution here

}

// Test cases
console.log(countBits(2)); // Expected: [0,1,1]
console.log(countBits(5)); // Expected: [0,1,1,2,1,2]`,
      python: `def countBits(n):
    # Write your solution here
    pass

# Test cases
print(countBits(2))
print(countBits(5))`,
      java: `class Solution {
    public static int[] countBits(int n) {
        // Write your solution here
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(countBits(2)));
        System.out.println(Arrays.toString(countBits(5)));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> countBits(int n) {
    // Write your solution here
    return {};
}

int main() {
    cout << "Counting Bits execution" << endl;
}`,
      csharp: `using System;
using System.Collections.Generic;

class Solution {
    public static int[] CountBits(int n) {
        // Write your solution here
        return new int[n+1];
    }

    static void Main() {
        Console.WriteLine("Counting Bits execution");
    }
}`,
      c: `#include <stdio.h>

// Placeholder for counting bits

int main() {
    printf("Counting Bits execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[0,1,1]\n[0,1,1,2,1,2]",
      python: "[0, 1, 1]\n[0, 1, 1, 2, 1, 2]",
      java: "[0, 1, 1]\n[0, 1, 1, 2, 1, 2]",
      cpp: "Counting Bits execution",
      csharp: "Counting Bits execution",
      c: "Counting Bits execution",
    },
  },
  "reverse-bits": {
    id: "reverse-bits",
    title: "Reverse Bits",
    difficulty: "Easy",
    category: "Bit Manipulation",
    description: {
      text: "Reverse bits of a given 32 bits unsigned integer.",
      notes: [
        "Input is a 32-bit unsigned integer.",
        "Return the integer resulting from reversing its bits.",
      ],
    },
    examples: [
      {
        input: "n = 43261596",
        output: "964176192",
        explanation:
          "Binary: 00000010100101000001111010011100 → 00111001011110000010100101000000",
      },
      {
        input: "n = 4294967293",
        output: "3221225471",
        explanation:
          "Binary: 11111111111111111111111111111101 → 10111111111111111111111111111111",
      },
    ],
    constraints: ["The input must be a 32-bit unsigned integer."],
    starterCode: {
      javascript: `function reverseBits(n) {
  // Write your solution here

}

// Test cases
console.log(reverseBits(43261596)); // Expected: 964176192
console.log(reverseBits(4294967293)); // Expected: 3221225471`,
      python: `def reverseBits(n):
    # Write your solution here
    pass

# Test cases
print(reverseBits(43261596))
print(reverseBits(4294967293))`,
      java: `class Solution {
    public static int reverseBits(int n) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(reverseBits(43261596));
        System.out.println(reverseBits(4294967293));
    }
}`,
      cpp: `#include <iostream>
using namespace std;

uint32_t reverseBits(uint32_t n) {
    // Write your solution here
    return 0;
}

int main() {
    cout << "Reverse Bits execution" << endl;
}`,
      csharp: `using System;

class Solution {
    public static uint ReverseBits(uint n) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine("Reverse Bits execution");
    }
}`,
      c: `#include <stdio.h>
#include <stdint.h>

// Placeholder for reverse bits

int main() {
    printf("Reverse Bits execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "964176192\n3221225471",
      python: "964176192\n3221225471",
      java: "964176192\n3221225471",
      cpp: "Reverse Bits execution",
      csharp: "Reverse Bits execution",
      c: "Reverse Bits execution",
    },
  },
  "missing-number": {
    id: "missing-number",
    title: "Missing Number",
    difficulty: "Easy",
    category: "Array • Bit Manipulation • Math",
    description: {
      text: "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
      notes: [
        "Try to implement a solution with O(n) time complexity and O(1) extra space using XOR or sum formula.",
      ],
    },
    examples: [
      {
        input: "nums = [3,0,1]",
        output: "2",
      },
      {
        input: "nums = [0,1]",
        output: "2",
      },
      {
        input: "nums = [9,6,4,2,3,5,7,0,1]",
        output: "8",
      },
    ],
    constraints: [
      "n == nums.length",
      "1 ≤ n ≤ 10⁴",
      "0 ≤ nums[i] ≤ n",
      "All the numbers of nums are unique.",
    ],
    starterCode: {
      javascript: `function missingNumber(nums) {
  // Write your solution here

}

// Test cases
console.log(missingNumber([3,0,1])); // Expected: 2
console.log(missingNumber([0,1])); // Expected: 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // Expected: 8`,
      python: `def missingNumber(nums):
    # Write your solution here
    pass

# Test cases
print(missingNumber([3,0,1]))
print(missingNumber([0,1]))
print(missingNumber([9,6,4,2,3,5,7,0,1]))`,
      java: `class Solution {
    public static int missingNumber(int[] nums) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(missingNumber(new int[]{3,0,1}));
        System.out.println(missingNumber(new int[]{0,1}));
        System.out.println(missingNumber(new int[]{9,6,4,2,3,5,7,0,1}));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int missingNumber(vector<int>& nums) {
    // Write your solution here
    return 0;
}

int main() {
    cout << "Missing Number execution" << endl;
}`,
      csharp: `using System;

class Solution {
    public static int MissingNumber(int[] nums) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine("Missing Number execution");
    }
}`,
      c: `#include <stdio.h>

// Placeholder for missing number

int main() {
    printf("Missing Number execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "2\n2\n8",
      python: "2\n2\n8",
      java: "2\n2\n8",
      cpp: "Missing Number execution",
      csharp: "Missing Number execution",
      c: "Missing Number execution",
    },
  },
  "sum-of-two-integers": {
    id: "sum-of-two-integers",
    title: "Sum of Two Integers",
    difficulty: "Medium",
    category: "Bit Manipulation",
    description: {
      text: "Calculate the sum of two integers a and b, but you are not allowed to use the operator '+' or '-'.",
      notes: ["Use bit manipulation to perform addition without '+' or '-'."],
    },
    examples: [
      {
        input: "a = 1, b = 2",
        output: "3",
      },
      {
        input: "a = -2, b = 3",
        output: "1",
      },
    ],
    constraints: ["-1000 ≤ a, b ≤ 1000"],
    starterCode: {
      javascript: `function getSum(a, b) {
  // Write your solution here

}

// Test cases
console.log(getSum(1,2)); // Expected: 3
console.log(getSum(-2,3)); // Expected: 1`,
      python: `def getSum(a, b):
    # Write your solution here
    pass

# Test cases
print(getSum(1,2))
print(getSum(-2,3))`,
      java: `class Solution {
    public static int getSum(int a, int b) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(getSum(1,2));
        System.out.println(getSum(-2,3));
    }
}`,
      cpp: `#include <iostream>
using namespace std;

int getSum(int a, int b) {
    // Write your solution here
    return 0;
}

int main() {
    cout << "Sum of Two Integers execution" << endl;
}`,
      csharp: `using System;

class Solution {
    public static int GetSum(int a, int b) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine("Sum of Two Integers execution");
    }
}`,
      c: `#include <stdio.h>

// Placeholder for sum of two integers

int main() {
    printf("Sum of Two Integers execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "3\n1",
      python: "3\n1",
      java: "3\n1",
      cpp: "Sum of Two Integers execution",
      csharp: "Sum of Two Integers execution",
      c: "Sum of Two Integers execution",
    },
  },
  "reverse-integer": {
    id: "reverse-integer",
    title: "Reverse Integer",
    difficulty: "Medium",
    category: "Math",
    description: {
      text: "Given a 32-bit signed integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2³¹, 2³¹ - 1], return 0.",
      notes: ["Assume the environment does not allow storing 64-bit integers."],
    },
    examples: [
      {
        input: "x = 123",
        output: "321",
      },
      {
        input: "x = -123",
        output: "-321",
      },
      {
        input: "x = 120",
        output: "21",
      },
    ],
    constraints: ["-2³¹ ≤ x ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function reverse(x) {
  // Write your solution here

}

// Test cases
console.log(reverse(123)); // Expected: 321
console.log(reverse(-123)); // Expected: -321
console.log(reverse(120)); // Expected: 21`,
      python: `def reverse(x):
    # Write your solution here
    pass

# Test cases
print(reverse(123))
print(reverse(-123))
print(reverse(120))`,
      java: `class Solution {
    public static int reverse(int x) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(reverse(123));
        System.out.println(reverse(-123));
        System.out.println(reverse(120));
    }
}`,
      cpp: `#include <iostream>
using namespace std;

int reverse(int x) {
    // Write your solution here
    return 0;
}

int main() {
    cout << "Reverse Integer execution" << endl;
}`,
      csharp: `using System;

class Solution {
    public static int Reverse(int x) {
        // Write your solution here
        return 0;
    }

    static void Main() {
        Console.WriteLine("Reverse Integer execution");
    }
}`,
      c: `#include <stdio.h>

// Placeholder for reverse integer

int main() {
    printf("Reverse Integer execution\\n");
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "321\n-321\n21",
      python: "321\n-321\n21",
      java: "321\n-321\n21",
      cpp: "Reverse Integer execution",
      csharp: "Reverse Integer execution",
      c: "Reverse Integer execution",
    },
  },
};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
  cpp: {
    name: "C++",
    icon: "/cpp.png",
    monacoLang: "cpp",
  },
  c: {
    name: "C",
    icon: "/c.png",
    monacoLang: "c",
  },
  csharp: {
    name: "C#",
    icon: "/csharp.png",
    monacoLang: "csharp",
  },
};
