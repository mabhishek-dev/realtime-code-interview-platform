const JUDGE0_API = "https://ce.judge0.com";

function prepareJavaCode(code) {
  if (code.includes("public class Main")) return code;

  if (code.includes("class Solution")) {
    return code.replace("class Solution", "public class Main");
  }

  if (code.includes("class Main")) {
    return code.replace("class Main", "public class Main");
  }

  return `
import java.util.*;

public class Main {
    public static void main(String[] args) {
        ${code}
    }
}
`;
}

export async function executeCode(language, code) {
  try {
    const languageMap = {
      javascript: 63,
      python: 71,
      java: 62,
      cpp: 54,
      c: 50,
      csharp: 51,
    };

    const language_id = languageMap[language];

    if (!language_id) {
      return {
        success: false,
        error: `Unsupported language: ${language}`,
      };
    }

    if (language === "java") {
      code = prepareJavaCode(code);
    }

    const response = await fetch(`${JUDGE0_API}/submissions?wait=true`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language_id,
        source_code: code,
        stdin: "",
        cpu_time_limit: 2,
        memory_limit: 128000,
      }),
    });

    if (!response.ok) {
      return {
        success: false,
        error: `HTTP error! status: ${response.status}`,
      };
    }

    const data = await response.json();

    if (!data.status || data.status.id !== 3) {
      return {
        success: false,
        error:
          data.compile_output ||
          data.stderr ||
          data.message ||
          data.status?.description ||
          "Execution failed",
      };
    }

    return {
      success: true,
      output: (data.stdout || "").trim() || "No output",
    };
  } catch (error) {
    return {
      success: false,
      error: `Failed to execute code: ${error.message}`,
    };
  }
}
