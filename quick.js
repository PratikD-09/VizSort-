let array = [];
let stopSortingFlag = false;

function generateArray(size) {
  const arrayContainer = document.getElementById('arrayContainer');
  arrayContainer.innerHTML = '';
  for (let i = 0; i < size; i++) {
    const value = Math.floor(Math.random() * 100) + 1;
    array.push(value);
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${value * 3}px`;
    arrayContainer.appendChild(bar);
  }
}
generateArray(40);

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

async function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
      const arrayContainer = document.getElementById('arrayContainer');
      const bars = arrayContainer.querySelectorAll('.bar');
      [bars[i].style.height, bars[j].style.height] = [bars[j].style.height, bars[i].style.height];
      await new Promise(resolve => setTimeout(resolve, 100 - document.getElementById('speedRange').value));
    }
  }
  swap(arr, i + 1, high);
  const arrayContainer = document.getElementById('arrayContainer');
  const bars = arrayContainer.querySelectorAll('.bar');
  [bars[i + 1].style.height, bars[high].style.height] = [bars[high].style.height, bars[i + 1].style.height];
  await new Promise(resolve => setTimeout(resolve, 100 - document.getElementById('speedRange').value));
  return i + 1;
}

async function quickSort(arr, low, high) {
  if (low < high) {
    const pi = await partition(arr, low, high);
    await quickSort(arr, low, pi - 1);
    await quickSort(arr, pi + 1, high);
  }
}

function startSorting() {
  stopSortingFlag = false;
  quickSort(array, 0, array.length - 1);
}

function stopSorting() {
  stopSortingFlag = true;
}

function resetArray() {
  stopSortingFlag = true;
  array = [];
  const size = parseInt(document.getElementById('arraySizeInput').value);
  generateArray(size);
}

function fn() {
  document.querySelector(".burger").addEventListener("click", () => {
    document.querySelector(".left").style.left = "0";
  });
}

fn();

function fn1() {
  document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".left").style.left = "-100%";
  });
}

fn1();






// algorethem Menu


function showContent(language) {
    let contentDiv = document.getElementById('content');
    switch (language) {
        case 'c':
            contentDiv.innerHTML = "<p></p><pre><code class=\"language-c\">// C program for Quick Sort\n\nvoid swap(int* a, int* b) {\n    int t = *a;\n    *a = *b;\n    *b = t;\n}\n\nint partition(int arr[], int low, int high) {\n    int pivot = arr[high];\n    int i = (low - 1);\n\n    for (int j = low; j <= high - 1; j++) {\n        if (arr[j] < pivot) {\n            i++;\n            swap(&arr[i], &arr[j]);\n        }\n    }\n    swap(&arr[i + 1], &arr[high]);\n    return (i + 1);\n}\n\nvoid quickSort(int arr[], int low, int high) {\n    if (low < high) {\n        int pi = partition(arr, low, high);\n\n        quickSort(arr, low, pi - 1);\n        quickSort(arr, pi + 1, high);\n    }\n}\n</code></pre>";
            break;
        case 'cpp':
            contentDiv.innerHTML = "<p></p><pre><code class=\"language-cpp\">// C++ program for Quick Sort\n\n#include <iostream>\nusing namespace std;\n\nvoid swap(int* a, int* b) {\n    int t = *a;\n    *a = *b;\n    *b = t;\n}\n\nint partition(int arr[], int low, int high) {\n    int pivot = arr[high];\n    int i = (low - 1);\n\n    for (int j = low; j <= high - 1; j++) {\n        if (arr[j] < pivot) {\n            i++;\n            swap(&arr[i], &arr[j]);\n        }\n    }\n    swap(&arr[i + 1], &arr[high]);\n    return (i + 1);\n}\n\nvoid quickSort(int arr[], int low, int high) {\n    if (low < high) {\n        int pi = partition(arr, low, high);\n\n        quickSort(arr, low, pi - 1);\n        quickSort(arr, pi + 1, high);\n    }\n}\n</code></pre>";
            break;
        case 'java':
            contentDiv.innerHTML = "<p></p><pre><code class=\"language-java\">// Java program for Quick Sort\n\npublic class QuickSort {\n    void swap(int[] arr, int i, int j) {\n        int temp = arr[i];\n        arr[i] = arr[j];\n        arr[j] = temp;\n    }\n\n    int partition(int[] arr, int low, int high) {\n        int pivot = arr[high];\n        int i = low - 1;\n        for (int j = low; j < high; j++) {\n            if (arr[j] < pivot) {\n                i++;\n                swap(arr, i, j);\n            }\n        }\n        swap(arr, i + 1, high);\n        return i + 1;\n    }\n\n    void quickSort(int[] arr, int low, int high) {\n        if (low < high) {\n            int pi = partition(arr, low, high);\n            quickSort(arr, low, pi - 1);\n            quickSort(arr, pi + 1, high);\n        }\n    }\n}\n</code></pre>";
            break;
        case 'python':
            contentDiv.innerHTML = "<p></p><pre><code class=\"language-python\"># Python program for Quick Sort\n\ndef partition(arr, low, high):\n    i = low - 1\n    pivot = arr[high]\n\n    for j in range(low, high):\n        if arr[j] <= pivot:\n            i += 1\n            arr[i], arr[j] = arr[j], arr[i]\n\n    arr[i + 1], arr[high] = arr[high], arr[i + 1]\n    return i + 1\n\n\ndef quickSort(arr, low, high):\n    if low < high:\n        pi = partition(arr, low, high)\n        quickSort(arr, low, pi - 1)\n        quickSort(arr, pi + 1, high)\n</code></pre>";
            break;
        case 'javascript':
            contentDiv.innerHTML = "<p></p><pre><code class=\"language-javascript\">// JavaScript program for Quick Sort\n\nfunction swap(arr, idx1, idx2) {\n    let temp = arr[idx1];\n    arr[idx1] = arr[idx2];\n    arr[idx2] = temp;\n}\n\nfunction partition(arr, low, high) {\n    let pivot = arr[high];\n    let i = low - 1;\n\n    for (let j = low; j < high; j++) {\n        if (arr[j] < pivot) {\n            i++;\n            swap(arr, i, j);\n        }\n    }\n    swap(arr, i + 1, high);\n    return i + 1;\n}\n\nfunction quickSort(arr, low, high) {\n    if (low < high) {\n        let pi = partition(arr, low, high);\n        quickSort(arr, low, pi - 1);\n        quickSort(arr, pi + 1, high);\n    }\n}\n</code></pre>";
            break;
        default:
            contentDiv.innerHTML = "<p>Please select a programming language.</p>";
            break;
    }
  }
  
