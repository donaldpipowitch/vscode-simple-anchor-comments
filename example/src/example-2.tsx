// # Start
function sum(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

// Lorem Ipsum

function someNesting() {
  function sum(a: number, b: number): number {
    return a + b;
  }

  function subtract(a: number, b: number): number {
    return a - b;
  }

  function multiply(a: number, b: number): number {
    return a * b;
  }
}

// Lorem Ipsum 2

function moreNesting() {
  function someNesting() {
    function sum(a: number, b: number): number {
      return a + b;
    }

    function subtract(a: number, b: number): number {
      return a - b;
    }

    function multiply(a: number, b: number): number {
      return a * b;
    }
  }
}

// Lorem Ipsum 3

// # End
function andMoreNesting() {
  function moreNesting() {
    function someNesting() {
      function sum(a: number, b: number): number {
        return a + b;
      }

      function subtract(a: number, b: number): number {
        return a - b;
      }

      function multiply(a: number, b: number): number {
        return a * b;
      }
    }
  }
}
